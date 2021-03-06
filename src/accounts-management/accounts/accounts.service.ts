import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transfer } from "src/transfers-management/transfers/transfer.model";
import { TransferType } from "src/transfers-management/transfer-types/transfer-type.model";
import { Client } from '../clients/client.model';
import { Account } from "./account.model";
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private account: typeof Account,

    @InjectModel(Client)
    private client: typeof Client,
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account | String>{
    let accountExists = await this.client.findOne({
      where: {
        id: createAccountDto.clienteId
      }
    });

    if (!accountExists) {
      return 'Id de cliente inválido.'
    }

    return this.account.create(createAccountDto);
  }

  async findAll(): Promise<Account[] | String> {
    let accounts = await this.account.findAll({
      order: ['id'],
      include: [Client]
    });

    if (accounts.length) {
      return accounts;
    } else {
      return "Nenhuma conta cadastrada."
    }
  }

  async findOne(id: number): Promise<Account | String> {
    let account = await this.account.findOne({
      where: {
        id: id
      },
      include: [
        Client,
        {
          model: Transfer,
          as: 'transferenciasEfetuadas',
          include: [
            TransferType
          ]
        },
        {
          model: Transfer,
          as: 'transferenciasRecebidas',
          include: [
            TransferType
          ]
        }
      ]
    });

    if (account) {
      return account;
    } else {
      return "Conta não localizada."
    }
  }

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<Account | String> {
    let account = await this.account.findOne({
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
    const acccount = await this.account.findOne({
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
