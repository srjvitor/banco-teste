import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClientsController } from './clients/clients.controller';
import { AccountsController } from './accounts/accounts.controller';

import { ClientsService } from './clients/clients.service';
import { AccountsService } from './accounts/accounts.service';

import { Client } from './clients/client.model';
import { Account } from "./accounts/account.model";

@Module({
  imports: [SequelizeModule.forFeature([Client, Account])],
  controllers: [ClientsController, AccountsController],
  providers: [ClientsService, AccountsService],
  exports: [SequelizeModule]
})
export class AccountsModule {}
