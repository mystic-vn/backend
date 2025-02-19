import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContextDto {
  @ApiProperty({ description: 'Tên của ngữ cảnh' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Mô tả chi tiết về ngữ cảnh' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Slug URL thân thiện' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9-]+$/, {
    message: 'Slug chỉ được chứa chữ thường, số và dấu gạch ngang'
  })
  slug: string;

  @ApiProperty({ description: 'Thứ tự hiển thị' })
  @IsNumber()
  @IsNotEmpty()
  order: number;
} 