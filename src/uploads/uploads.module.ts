import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { S3Service } from './s3.service';

@Module({
  imports: [
    MulterModule.register({
      storage: undefined, // Sử dụng memory storage để lưu file tạm thời trong memory
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsService, S3Service],
  exports: [UploadsService, S3Service],
})
export class UploadsModule {} 