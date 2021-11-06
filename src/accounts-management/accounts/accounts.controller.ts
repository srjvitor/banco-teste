import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Account } from "./account.model";
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Controller('contas')
export class AccountsController {
  constructor(private accountsService: AccountsService) { }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  async findAll(): Promise<Account[] | String> {
    return this.accountsService.findAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.accountsService.delete(id);
  }
}

