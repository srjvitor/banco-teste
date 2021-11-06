import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transfer } from './transfers/transfer.model';
import { TransfersController } from './transfers/transfers.controller';
import { TransfersService } from './transfers/transfers.service';

@Module({
  imports: [SequelizeModule.forFeature([Transfer])],
  controllers: [TransfersController],
  providers: [TransfersService]
})
export class TransfersModule { }
