import { Module } from '@nestjs/common';
import { ClientesController } from './clientes/clientes.controller';
import { ContasController } from './contas/contas.controller';
import { ClientesService } from './clientes/clientes.service';
import { ContasService } from './contas/contas.service';

@Module({
  controllers: [ClientesController, ContasController],
  providers: [ClientesService, ContasService]
})
export class GerenciamentoContasModule {}
