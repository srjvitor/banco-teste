import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GerenciamentoContasModule } from './gerenciamento-contas/gerenciamento-contas.module';
import { TransferenciasContasModule } from './transferencias-contas/transferencias-contas.module';
import { BoletosBancariosModule } from './boletos-bancarios/boletos-bancarios.module';

@Module({
  imports: [GerenciamentoContasModule, TransferenciasContasModule, BoletosBancariosModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
