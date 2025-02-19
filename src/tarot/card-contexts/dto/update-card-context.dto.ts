import { PartialType } from '@nestjs/swagger';
import { CreateCardContextDto } from './create-card-context.dto';

export class UpdateCardContextDto extends PartialType(CreateCardContextDto) {} 