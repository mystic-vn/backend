import { IsString, IsNumber, IsArray, ValidateNested, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class PositionDto {
  @IsNumber()
  index: number;

  @IsString()
  aspect: string;

  @IsString()
  interpretation: string;
}

class PreAnalyzedPatternsDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  cardCombinations: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interpretationTemplates: string[];
}

export class CreateQuestionDto {
  @IsString()
  content: string;

  @IsString()
  context: string;

  @IsString()
  spreadType: string;

  @IsNumber()
  numberOfCards: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PositionDto)
  positions: PositionDto[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  keywords: string[];

  @ValidateNested()
  @Type(() => PreAnalyzedPatternsDto)
  @IsOptional()
  preAnalyzedPatterns?: PreAnalyzedPatternsDto;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
} 