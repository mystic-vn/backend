import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsMongoId, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryCardContextDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsMongoId()
  cardId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsMongoId()
  contextId?: string;

  @ApiPropertyOptional({ minimum: 1, default: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({ minimum: 1, maximum: 50, default: 10 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  limit?: number = 10;
} 