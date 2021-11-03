import { Controller, Param, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('transferencias')
export class TransferenciasController {

  @Post()
  create() {
    return 'Criação de nova transferência'
  }

  @Get()
  findAll() {
    return 'Todas as tranferencias efetuadas pelo cliente'
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return 'Transferencia efetuada'
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return 'Atualiação de transferência'
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'transferencia deletada'
  }
}
