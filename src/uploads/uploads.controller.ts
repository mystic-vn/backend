import { Controller, Post, UseInterceptors, UploadedFile, Delete, Param, UseGuards, Get, Query, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UploadsService } from './uploads.service';
import { ApiTags, ApiConsumes, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('uploads')
@Controller('uploads')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'moderator')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Get()
  @ApiQuery({
    name: 'prefix',
    required: false,
    description: 'Đường dẫn thư mục để liệt kê nội dung',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Từ khóa tìm kiếm tên file',
  })
  async listFiles(
    @Query('prefix') prefix?: string,
    @Query('search') search?: string,
  ) {
    return this.uploadsService.listFiles(prefix, search);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        folder: {
          type: 'string',
          description: 'Đường dẫn thư mục để upload file (tùy chọn)',
        },
      },
    },
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('folder') folder?: string,
  ) {
    console.log('Uploading file:', {
      originalname: file.originalname,
      folder
    });
    return this.uploadsService.uploadFile(file, folder);
  }

  @Delete('file/:key')
  @ApiParam({
    name: 'key',
    description: 'Key của file cần xóa',
    type: 'string',
  })
  async deleteFile(@Param('key') key: string) {
    if (!key) {
      throw new Error('File key is required');
    }
    const decodedKey = decodeURIComponent(key);
    console.log('Deleting file with key:', decodedKey);
    return this.uploadsService.deleteFile(decodedKey);
  }

  @Post('folders')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        folderPath: {
          type: 'string',
          description: 'Đường dẫn thư mục cần tạo',
        },
      },
      required: ['folderPath'],
    },
  })
  async createFolder(@Body('folderPath') folderPath: string) {
    return this.uploadsService.createFolder(folderPath);
  }

  @Delete('folder')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        folderPath: {
          type: 'string',
          description: 'Đường dẫn thư mục cần xóa',
        },
      },
      required: ['folderPath'],
    },
  })
  async deleteFolder(@Body('folderPath') folderPath: string) {
    if (!folderPath) {
      throw new Error('Folder path is required');
    }
    console.log('Deleting folder:', folderPath);
    return this.uploadsService.deleteFolder(folderPath);
  }

  @Post('rename')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        oldPath: {
          type: 'string',
          description: 'Đường dẫn cũ của file/thư mục',
        },
        newPath: {
          type: 'string',
          description: 'Đường dẫn mới của file/thư mục',
        },
        isDirectory: {
          type: 'boolean',
          description: 'Có phải là thư mục không',
        },
      },
      required: ['oldPath', 'newPath', 'isDirectory'],
    },
  })
  async rename(
    @Body('oldPath') oldPath: string,
    @Body('newPath') newPath: string,
    @Body('isDirectory') isDirectory: boolean,
  ) {
    console.log('Renaming:', { oldPath, newPath, isDirectory });
    return this.uploadsService.rename(oldPath, newPath, isDirectory);
  }
} 