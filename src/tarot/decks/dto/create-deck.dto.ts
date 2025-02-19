import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeckDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên bộ bài không được để trống' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description: string;
} 