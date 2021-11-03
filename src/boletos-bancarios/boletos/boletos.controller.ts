import { Controller, Param, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('boletos')
export class BoletosController {
  @Post()
  create() {
    return 'Criação de nova boleto'
  }

  @Get()
  findAll() {
    return 'Todos os boletos registrados '
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return 'Boleto individual'
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return 'Atualiação de boleto'
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Exclusão de boleto'
  }
}
