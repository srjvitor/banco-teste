import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from "./account.model";
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountModel.create(createAccountDto);
  }

  async findAll(): Promise<Account[] | String> {
    let accounts = await this.accountModel.findAll({
      order: ['id']
    });

    if (accounts.length) {
      return accounts;
    } else {
      return "Nenhuma conta cadastrada."
    }
  }

  async findOne(id: number): Promise<Account | String> {
    let account = await this.accountModel.findOne({
      where: {
        id: id
      }
    });

    if (account) {
      return account;
    } else {
      return "Conta não localizada."
    }
  }

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<Account | String> {
    let account = await this.accountModel.findOne({
      where: {
        id: id
      }
    });

    if (account) {
      return account.update(updateAccountDto)
    } else {
      return "Falha ao atualizar conta, conta não localizada."
    }
  }

  async delete(id: number): Promise<void | String> {
    const acccount = await this.accountModel.findOne({
      where: {
        id: id
      }
    });

    if (acccount) {
      await acccount.destroy();
      return "Conta excluida com sucesso."
    } else {
      return "Falha ao excluir conta, conta não foi encontrada."
    }
  }
}