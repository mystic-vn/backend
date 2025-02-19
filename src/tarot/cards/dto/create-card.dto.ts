import { IsArray, IsNotEmpty, IsNumber, IsString, IsMongoId, IsOptional } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsMongoId()
  @IsNotEmpty()
  deckId: string;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsArray()
  @IsString({ each: true })
  generalKeywords: string[];

  @IsString()
  @IsNotEmpty()
  generalMeaningUpright: string;

  @IsString()
  @IsNotEmpty()
  generalMeaningReversed: string;

  @IsMongoId()
  @IsNotEmpty()
  arcanaTypeId: string;

  @IsMongoId()
  @IsOptional()
  suitId?: string;
}