import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardContextDto {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  cardId: string;

  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  contextId: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  meaningUpright: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  meaningReversed: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  advice: string;
} 