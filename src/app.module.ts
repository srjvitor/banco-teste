import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GerenciamentoContasModule } from './gerenciamento-contas/gerenciamento-contas.module';
import { TransferenciasContasModule } from './transferencias-contas/transferencias-contas.module';
import { BoletosBancariosModule } from './boletos-bancarios/boletos-bancarios.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      models: [],
    }),
    GerenciamentoContasModule,
    TransferenciasContasModule,
    BoletosBancariosModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
