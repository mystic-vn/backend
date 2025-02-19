import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateDeckDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Tên bộ bài không được để trống' })
  name?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description?: string;

  @IsString()
  @IsOptional()
  coverImageUrl?: string;

  @IsString()
  @IsOptional()
  backImageUrl?: string;
} 