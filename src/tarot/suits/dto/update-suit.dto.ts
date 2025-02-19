import { PartialType } from '@nestjs/swagger';
import { CreateSuitDto } from './create-suit.dto';

export class UpdateSuitDto extends PartialType(CreateSuitDto) {} 