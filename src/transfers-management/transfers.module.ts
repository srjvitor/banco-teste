import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'

import { AccountsModule } from 'src/accounts-management/accounts.module';
import { TransfersController } from './transfers/transfers.controller';
import { TransfersService } from './transfers/transfers.service';
import { TransferModel } from "./transfers/transfer.model";
import { TransferTypeModel } from "./transfer-types/transfer-type.model";

@Module({
  imports: [SequelizeModule.forFeature([TransferModel, TransferTypeModel]), AccountsModule],
  controllers: [TransfersController],
  providers: [TransfersService]
})
export class TransfersModule { }
