import { Controller, Param, Delete, Get, Post, Body, Put } from '@nestjs/common';
import { CreateSlipDto } from './dto/create-slip.dto';
import { UpdateSlipDto } from './dto/update-slip.dto';
import { SlipModel } from './slip.model';
import { SlipsService } from './slips.service';

@Controller('boletos')
export class SlipsController {
  constructor(private slipsService: SlipsService) { }

  @Post()
  create(@Body() createSlipDto: CreateSlipDto) {
    return this.slipsService.create(createSlipDto);
  }

  @Get()
  async findAll(): Promise<SlipModel[] | String> {
    return this.slipsService.findAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: number) {
    return this.slipsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSlipDto: UpdateSlipDto) {
    return this.slipsService.update(id, updateSlipDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.slipsService.delete(id);
  }
}
