import { PartialType } from '@nestjs/swagger';
import { CreateSlipDto } from './create-slip.dto';

export class UpdateSlipDto extends PartialType(CreateSlipDto) { }