import { Injectable } from '@nestjs/common';
import { S3Service } from './s3.service';

@Injectable()
export class UploadsService {
  constructor(private readonly s3Service: S3Service) {}

  async uploadFile(file: Express.Multer.File, folder?: string): Promise<string> {
    return this.s3Service.uploadFile(file, folder);
  }

  async deleteFile(key: string): Promise<void> {
    await this.s3Service.deleteFile(key);
  }

  async listFiles(prefix?: string, search?: string) {
    return this.s3Service.listFiles(prefix, search);
  }

  async createFolder(folderPath: string): Promise<void> {
    return this.s3Service.createFolder(folderPath);
  }

  async deleteFolder(folderPath: string): Promise<void> {
    return this.s3Service.deleteFolder(folderPath);
  }

  async rename(oldPath: string, newPath: string, isDirectory: boolean): Promise<void> {
    return this.s3Service.rename(oldPath, newPath, isDirectory);
  }
} 