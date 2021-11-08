import { Controller, Param, Delete, Get, Post, Body, Put } from '@nestjs/common';
import { CreateSlipDto } from './dto/create-slip.dto';
import { UpdateSlipDto } from './dto/update-slip.dto';
import { Slip } from './slip.model';
import { SlipsService } from './slips.service';

@Controller('boletos')
export class SlipsController {
  constructor(private slipsService: SlipsService) { }

  @Post()
  create(@Body() createSlipDto: CreateSlipDto) {
    return this.slipsService.create(createSlipDto);
  }

  @Get()
  async findAll(): Promise<Slip[] | String> {
    return this.slipsService.findAll();
  }

  @Get()
  FindOne(@Body() linhaDigitavel: number) {
    return this.slipsService.findOne(linhaDigitavel);
  }
}
