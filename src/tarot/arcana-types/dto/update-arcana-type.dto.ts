import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateArcanaTypeDto } from './create-arcana-type.dto';

// Loại bỏ các trường không được phép cập nhật (type và name)
// và cho phép các trường còn lại là optional
export class UpdateArcanaTypeDto extends PartialType(
  OmitType(CreateArcanaTypeDto, ['type', 'name'] as const)
) {} 