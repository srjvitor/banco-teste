import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Slip } from './slips/slip.model';
import { SlipsController } from './slips/slips.controller';
import { SlipsService } from './slips/slips.service';

@Module({
  imports: [SequelizeModule.forFeature([Slip])],
  controllers: [SlipsController],
  providers: [SlipsService]
})
export class SlipsModule {}
