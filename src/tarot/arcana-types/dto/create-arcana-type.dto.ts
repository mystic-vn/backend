import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CardType } from '../../cards/schemas/card.schema';

export class CreateArcanaTypeDto {
  @ApiProperty({ enum: CardType })
  @IsEnum(CardType)
  @IsNotEmpty()
  type: CardType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  significance: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readingFocus: string;
} 