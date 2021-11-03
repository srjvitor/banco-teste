import { Controller, Param, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  @Post()
  create() {
    return 'Cadastrar novo cliente.'
  }

  @Get()
  FindAll() {
    return 'Listar todos os clientes.'
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return 'Listar cliente por ID.'
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return 'Atualizacao de cadastro de cliente.'
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'Exclusão de cadastro de cliente.'
  }
}
