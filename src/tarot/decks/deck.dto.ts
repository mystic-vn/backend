import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';

export class CreateDeckDto {
  @ApiProperty({ description: 'Tên của bộ bài Tarot' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Mô tả về bộ bài Tarot' })
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'URL hình ảnh bìa của bộ bài' })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @ApiPropertyOptional({ description: 'URL hình ảnh mặt sau của lá bài' })
  @IsString()
  @IsOptional()
  backImage?: string;
}

export class UpdateDeckDto extends PartialType(CreateDeckDto) {} 