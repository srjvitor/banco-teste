import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Transfer } from './transfer.model';
import { TransfersService } from './transfers.service'
import { CreateTransferDto } from './dto/create-transfer.dto'
import { UpdateTransferDto } from './dto/update-transfer.dto'

@Controller('transferencias')
export class TransfersController {
  constructor(private transfersService: TransfersService) { }

  @Post()
  create(@Body() createTransferDto: CreateTransferDto): Promise<Transfer | String> {
    return this.transfersService.create(createTransferDto);
  }

  @Get()
  async findAll(): Promise<Transfer[] | String> {
    return this.transfersService.findAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: number) {
    return this.transfersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTransferDto: UpdateTransferDto) {
    return this.transfersService.update(id, updateTransferDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.transfersService.delete(id);
  }
}

