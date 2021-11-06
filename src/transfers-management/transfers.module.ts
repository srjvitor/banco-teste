import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'

import { AccountsModule } from 'src/accounts-management/accounts.module';
import { TransfersController } from './transfers/transfers.controller';
import { TransfersService } from './transfers/transfers.service';
import { Transfer } from './transfers/transfer.model';

@Module({
  imports: [SequelizeModule.forFeature([Transfer]), AccountsModule],
  controllers: [TransfersController],
  providers: [TransfersService]
})
export class TransfersModule { }
