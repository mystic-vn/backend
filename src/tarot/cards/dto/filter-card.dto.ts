import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class FilterCardDto {
  @ApiPropertyOptional()
  @IsMongoId()
  arcanaTypeId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsMongoId()
  suitId?: string;
} 