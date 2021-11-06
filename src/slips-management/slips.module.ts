import { Module } from '@nestjs/common';
import { SlipsController } from './slips/slips.controller';
import { SlipsService } from './slips/slips.service';

@Module({
  controllers: [SlipsController],
  providers: [SlipsService]
})
export class SlipsModule {}
