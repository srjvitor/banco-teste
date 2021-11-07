import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClientsController } from './clients/clients.controller';
import { AccountsController } from './accounts/accounts.controller';

import { ClientsService } from './clients/clients.service';
import { AccountsService } from './accounts/accounts.service';

import { ClientModel } from './clients/client.model';
import { AccountModel } from "./accounts/account.model";

@Module({
  imports: [SequelizeModule.forFeature([ClientModel, AccountModel])],
  controllers: [ClientsController, AccountsController],
  providers: [ClientsService, AccountsService],
  exports: [SequelizeModule]
})
export class AccountsModule {}
