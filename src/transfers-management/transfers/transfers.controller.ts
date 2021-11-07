import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Transfer } from "./transfer.model";
import { TransfersService } from './transfers.service'
import { CreateTransferDto } from './dto/create-transfer.dto'

@Controller('transferencias')
export class TransfersController {
  constructor(private transfersService: TransfersService) { }

  @Post()
  create(@Body() createTransferDto: CreateTransferDto): Promise<Transfer | String> {
    return this.transfersService.create(createTransferDto);
  }
}

