import { Module } from '@nestjs/common';
import { BoletosController } from './boletos/boletos.controller';
import { BoletosService } from './boletos/boletos.service';

@Module({
  controllers: [BoletosController],
  providers: [BoletosService]
})
export class BoletosBancariosModule {}
