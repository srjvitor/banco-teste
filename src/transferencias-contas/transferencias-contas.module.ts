import { Module } from '@nestjs/common';
import { TransferenciasController } from './transferencias/transferencias.controller';
import { TransferenciasService } from './transferencias/transferencias.service';

@Module({
  controllers: [TransferenciasController],
  providers: [TransferenciasService]
})
export class TransferenciasContasModule {}
