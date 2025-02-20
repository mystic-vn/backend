import { IsString, IsArray, IsBoolean, ValidateNested, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class CardDto {
  @IsString()
  cardId: string;

  @IsNumber()
  position: number;

  @IsString()
  aspect: string;

  @IsBoolean()
  isReversed: boolean;
}

export class CreateReadingAnalysisDto {
  @IsString()
  spreadTypeId: string;

  @IsString()
  context: string;

  @IsString()
  @IsOptional()
  questionId?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  cards: CardDto[];
} 