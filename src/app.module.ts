import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AccountsModule } from './accounts-management/accounts.module';
import { TransfersModule } from './transfer-smanagement/transfers.module';
import { SlipsModule } from './slips-management/slips.module';
import { SequelizeModule } from '@nestjs/sequelize';

import { Client } from './accounts-management/clients/client.model';
import { Account } from "./accounts-management/accounts/account.model";
import { Transfer } from './transfer-smanagement/transfers/transfer.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'banco',
      models: [Client, Account, Transfer],
    }),
    AccountsModule,
    TransfersModule,
    SlipsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
