import { Injectable, OnModuleInit, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command, CopyObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as sharp from 'sharp';

@Injectable()
export class S3Service implements OnModuleInit {
  private s3Client: S3Client;
  private bucket: string;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    try {
      const region = this.configService.getOrThrow<string>('AWS_REGION');
      const accessKeyId = this.configService.getOrThrow<string>('AWS_ACCESS_KEY_ID');
      const secretAccessKey = this.configService.getOrThrow<string>('AWS_SECRET_ACCESS_KEY');
      this.bucket = this.configService.getOrThrow<string>('AWS_BUCKET_NAME');

      console.log('S3 Configuration:', {
        region,
        bucket: this.bucket,
        accessKeyId: accessKeyId.substring(0, 8) + '...' // Log một phần của access key để bảo mật
      });

      this.s3Client = new S3Client({
        region,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
      });
      console.log('S3 Client initialized successfully');
    } catch (error) {
      console.error('Error initializing S3 client:', error);
      throw error;
    }
  }

  private async compressImage(buffer: Buffer, mimetype: string): Promise<Buffer> {
    try {
      // Nếu là ảnh WebP, PNG hoặc JPEG
      if (mimetype.includes('image/')) {
        const image = sharp(buffer);
        
        // Chuyển đổi tất cả ảnh sang WebP với chất lượng 80%
        return await image
          .webp({ quality: 80 })
          .resize(1200, 1200, { 
            fit: 'inside', // Giữ tỷ lệ ảnh, không crop
            withoutEnlargement: true // Không phóng to ảnh nhỏ
          })
          .toBuffer();
      }
      return buffer; // Trả về buffer gốc nếu không phải ảnh
    } catch (error) {
      console.error('Error compressing image:', error);
      return buffer; // Trả về buffer gốc nếu có lỗi
    }
  }

  async uploadFile(file: Express.Multer.File, folder?: string): Promise<string> {
    try {
      // Xử lý folder path
      let key;
      if (folder) {
        // Đảm bảo folder bắt đầu bằng uploads/
        const normalizedFolder = folder.startsWith('uploads/') 
          ? folder 
          : `uploads/${folder}`;
        
        // Loại bỏ dấu / thừa và thêm timestamp + filename
        key = `${normalizedFolder.replace(/\/+/g, '/')}/${Date.now()}-${file.originalname}`;
      } else {
        key = `uploads/${Date.now()}-${file.originalname}`;
      }

      console.log('Attempting to upload file:', { 
        bucket: this.bucket, 
        key,
        originalFolder: folder
      });
      
      // Nén ảnh nếu là file ảnh
      const compressedBuffer = await this.compressImage(file.buffer, file.mimetype);
      
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: compressedBuffer,
        ContentType: file.mimetype.includes('image/') ? 'image/webp' : file.mimetype // Đổi content type sang webp nếu là ảnh
      });

      await this.s3Client.send(command);

      // Tạo URL công khai
      const url = `https://${this.bucket}.s3.amazonaws.com/${key}`;
      console.log('File uploaded successfully:', url);

      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new InternalServerErrorException(`Failed to upload file: ${error.message}`);
    }
  }

  async deleteFile(key: string): Promise<void> {
    try {
      if (!key) {
        throw new Error('Key is required');
      }

      // Đảm bảo key có prefix "uploads/" nếu không có
      const cleanKey = key.startsWith('uploads/') ? key : `uploads/${key.replace(/^\/+/, '')}`;
      
      console.log('Attempting to delete file:', { 
        bucket: this.bucket, 
        originalKey: key,
        cleanKey: cleanKey 
      });
      
      const command = new DeleteObjectCommand({
        Bucket: this.bucket,
        Key: cleanKey,
      });

      await this.s3Client.send(command);
      console.log('File deleted successfully:', cleanKey);
    } catch (error) {
      console.error('Error deleting file:', {
        key,
        error: error.message,
        stack: error.stack
      });
      throw new InternalServerErrorException(`Failed to delete file: ${error.message}`);
    }
  }

  private async getSignedUrl(key: string): Promise<string> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });
      return await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
    } catch (error) {
      console.error('Error getting signed URL:', error);
      return `https://${this.bucket}.s3.amazonaws.com/${key}`;
    }
  }

  async listFiles(prefix?: string, search?: string): Promise<Array<{
    key: string;
    size: number;
    lastModified: Date;
    url: string;
    isDirectory: boolean;
  }>> {
    try {
      console.log('Listing files with params:', {
        bucket: this.bucket,
        prefix: prefix || '',
        search
      });

      const command = new ListObjectsV2Command({
        Bucket: this.bucket,
        Prefix: prefix || '',
        Delimiter: '/'
      });

      const response = await this.s3Client.send(command);
      console.log('S3 list response:', {
        prefixes: response.CommonPrefixes?.length || 0,
        contents: response.Contents?.length || 0
      });

      const files: Array<{
        key: string;
        size: number;
        lastModified: Date;
        url: string;
        isDirectory: boolean;
      }> = [];

      // Xử lý các thư mục (CommonPrefixes)
      if (response.CommonPrefixes) {
        for (const prefix of response.CommonPrefixes) {
          if (prefix.Prefix) {
            const key = prefix.Prefix;
            console.log('Processing directory:', key);
            files.push({
              key,
              size: 0,
              lastModified: new Date(),
              url: `https://${this.bucket}.s3.amazonaws.com/${key}`,
              isDirectory: true,
            });
          }
        }
      }

      // Xử lý các file
      if (response.Contents) {
        for (const content of response.Contents) {
          if (content.Key && !content.Key.endsWith('/')) {
            const key = content.Key;
            console.log('Processing file:', key);
            files.push({
              key,
              size: content.Size || 0,
              lastModified: content.LastModified || new Date(),
              url: `https://${this.bucket}.s3.amazonaws.com/${key}`,
              isDirectory: false,
            });
          }
        }
      }

      // Lọc kết quả theo từ khóa tìm kiếm nếu có
      let filteredFiles = files;
      if (search) {
        const searchLower = search.toLowerCase();
        filteredFiles = files.filter(file => {
          const fileName = file.key.split('/').pop() || '';
          return fileName.toLowerCase().includes(searchLower);
        });
      }

      console.log('Filtered files:', {
        total: filteredFiles.length,
        directories: filteredFiles.filter(f => f.isDirectory).length,
        files: filteredFiles.filter(f => !f.isDirectory).length
      });

      return filteredFiles;
    } catch (error) {
      console.error('Error listing files from S3:', error);
      throw new InternalServerErrorException('Could not list files from S3');
    }
  }

  async createFolder(folderPath: string): Promise<void> {
    try {
      const key = `${folderPath.replace(/^\/+|\/+$/g, '')}/`;
      console.log('Creating folder:', { bucket: this.bucket, key });
      
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: '',
      });

      await this.s3Client.send(command);
      console.log('Folder created successfully:', key);
    } catch (error) {
      console.error('Error creating folder:', error);
      throw new InternalServerErrorException(`Failed to create folder: ${error.message}`);
    }
  }

  async deleteFolder(folderPath: string): Promise<void> {
    try {
      if (!folderPath) {
        throw new Error('Folder path is required');
      }

      // Đảm bảo đường dẫn thư mục có prefix "uploads/" và kết thúc bằng "/"
      const cleanPath = folderPath.startsWith('uploads/') 
        ? folderPath.replace(/\/*$/, '/') 
        : `uploads/${folderPath.replace(/^\/+/, '').replace(/\/*$/, '/')}`; 

      console.log('Deleting folder and its contents:', { 
        bucket: this.bucket, 
        originalPath: folderPath,
        cleanPath: cleanPath 
      });

      // Liệt kê tất cả các file trong thư mục
      const listCommand = new ListObjectsV2Command({
        Bucket: this.bucket,
        Prefix: cleanPath,
        // Không sử dụng Delimiter để lấy tất cả các file trong thư mục con
      });

      const response = await this.s3Client.send(listCommand);
      const items = response.Contents || [];
      console.log('Found items to delete:', items.length);

      if (items.length === 0) {
        console.log('No items found in folder');
        return;
      }

      // Xóa từng file một
      for (const file of items) {
        if (file.Key) {
          console.log('Deleting item:', file.Key);
          await this.s3Client.send(
            new DeleteObjectCommand({
              Bucket: this.bucket,
              Key: file.Key,
            })
          );
        }
      }

      console.log('Folder and its contents deleted successfully:', cleanPath);
    } catch (error) {
      console.error('Error deleting folder:', {
        folderPath,
        error: error.message,
        stack: error.stack
      });
      throw new InternalServerErrorException(`Failed to delete folder: ${error.message}`);
    }
  }

  async rename(oldPath: string, newPath: string, isDirectory: boolean): Promise<void> {
    try {
      if (!oldPath || !newPath) {
        throw new Error('Old path and new path are required');
      }

      console.log('Original paths:', {
        oldPath,
        newPath,
        isDirectory
      });

      // Đảm bảo đường dẫn có prefix "uploads/"
      const oldKey = oldPath.startsWith('uploads/') ? oldPath : `uploads/${oldPath.replace(/^\/+/, '')}`;
      const newKey = newPath.startsWith('uploads/') ? newPath : `uploads/${newPath.replace(/^\/+/, '')}`;

      // Đảm bảo đường dẫn thư mục kết thúc bằng "/"
      const oldKeyWithSlash = isDirectory ? oldKey.replace(/\/*$/, '/') : oldKey;
      const newKeyWithSlash = isDirectory ? newKey.replace(/\/*$/, '/') : newKey;

      console.log('Processed paths:', { 
        oldKey,
        newKey,
        oldKeyWithSlash,
        newKeyWithSlash,
        isDirectory
      });

      if (isDirectory) {
        // Liệt kê tất cả các file trong thư mục
        const listCommand = new ListObjectsV2Command({
          Bucket: this.bucket,
          Prefix: oldKeyWithSlash,
        });

        console.log('Listing files with prefix:', oldKeyWithSlash);
        const response = await this.s3Client.send(listCommand);
        const items = response.Contents || [];
        console.log('Found items:', items.length);

        if (items.length === 0) {
          console.log('No items found in directory, creating empty directory');
          // Tạo thư mục mới trống
          await this.s3Client.send(
            new PutObjectCommand({
              Bucket: this.bucket,
              Key: newKeyWithSlash,
              Body: '',
            })
          );
          console.log('Created new empty directory:', newKeyWithSlash);

          // Xóa thư mục cũ trống
          await this.s3Client.send(
            new DeleteObjectCommand({
              Bucket: this.bucket,
              Key: oldKeyWithSlash,
            })
          );
          console.log('Deleted old empty directory:', oldKeyWithSlash);
          return;
        }

        // Copy từng file sang đường dẫn mới
        for (const item of items) {
          if (item.Key) {
            // Thay thế phần đầu của đường dẫn (oldKey) bằng đường dẫn mới (newKey)
            const newItemKey = item.Key.replace(oldKeyWithSlash, newKeyWithSlash);
            console.log('Processing file:', {
              oldKey: item.Key,
              newKey: newItemKey,
              copySource: `${this.bucket}/${item.Key}`
            });
            
            // Copy file sang vị trí mới
            await this.s3Client.send(
              new CopyObjectCommand({
                Bucket: this.bucket,
                CopySource: `${this.bucket}/${item.Key}`,
                Key: newItemKey,
              })
            );
            console.log('Copied file to new location');

            // Xóa file cũ
            await this.s3Client.send(
              new DeleteObjectCommand({
                Bucket: this.bucket,
                Key: item.Key,
              })
            );
            console.log('Deleted file from old location');
          }
        }
      } else {
        console.log('Copying single file');
        // Copy file sang vị trí mới
        await this.s3Client.send(
          new CopyObjectCommand({
            Bucket: this.bucket,
            CopySource: `${this.bucket}/${oldKeyWithSlash}`,
            Key: newKeyWithSlash,
          })
        );
        console.log('File copied to new location');

        // Xóa file cũ
        await this.s3Client.send(
          new DeleteObjectCommand({
            Bucket: this.bucket,
            Key: oldKeyWithSlash,
          })
        );
        console.log('File deleted from old location');
      }

      console.log('Rename completed successfully');
    } catch (error) {
      console.error('Error renaming:', error);
      throw new InternalServerErrorException(`Failed to rename: ${error.message}`);
    }
  }
} 