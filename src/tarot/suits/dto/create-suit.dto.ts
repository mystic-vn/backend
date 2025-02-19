import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CardSuit } from '../schemas/suit.schema';

export class CreateSuitDto {
  @ApiProperty({ enum: CardSuit })
  @IsEnum(CardSuit)
  @IsNotEmpty()
  name: CardSuit;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  meaning: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  element: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
} 