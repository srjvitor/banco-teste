import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Client } from './client.model';
import { ClientsService } from './clients.service'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'

@Controller('clientes')
export class ClientsController {
  constructor(private clientsService: ClientsService) { }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientsService.delete(id);
  }
}
