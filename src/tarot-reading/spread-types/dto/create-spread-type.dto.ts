import { IsString, IsNumber, IsArray, ValidateNested, IsOptional, IsBoolean, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class SpreadPositionDto {
  @IsNumber()
  index: number;

  @IsString()
  name: string;

  @IsString()
  aspect: string;

  @IsString()
  description: string;
}

export class CreateSpreadTypeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpreadPositionDto)
  @ArrayMinSize(1)
  positions: SpreadPositionDto[];

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  supportedContexts: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
} 