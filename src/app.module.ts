import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { AccountsModule } from './accounts-management/accounts.module';
import { SlipsModule } from './slips-management/slips.module';
import { TransfersModule } from './transfers-management/transfers.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'banco',
      autoLoadModels: true,
    }),
    AccountsModule,
    TransfersModule,
    SlipsModule
  ],
  providers: [AppService]
})
export class AppModule { }
