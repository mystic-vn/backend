import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID, IsString, IsInt, Min, Max, IsBoolean } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class QueryCardDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  arcanaTypeId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  suitId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  deckId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isDeleted?: boolean;
}