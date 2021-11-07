import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TransferModel } from "src/transfers-management/transfers/transfer.model";
import { TransferTypeModel } from "src/transfers-management/transfer-types/transfer-type.model";
import { ClientModel } from '../clients/client.model';
import { AccountModel } from "./account.model";
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(AccountModel)
    private accountModel: typeof AccountModel,
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<AccountModel> {
    return this.accountModel.create(createAccountDto);
  }

  async findAll(): Promise<AccountModel[] | String> {
    let accounts = await this.accountModel.findAll({
      order: ['id'],
      include: [ClientModel]
    });

    if (accounts.length) {
      return accounts;
    } else {
      return "Nenhuma conta cadastrada."
    }
  }

  async findOne(id: number): Promise<AccountModel | String> {
    let account = await this.accountModel.findOne({
      where: {
        id: id
      },
      include: [
        ClientModel,
        {
          model: TransferModel,
          as: 'transferenciasEfetuadas',
          include: [
            TransferTypeModel
          ]
        },
        {
          model: TransferModel,
          as: 'transferenciasRecebidas',
          include: [
            TransferTypeModel
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

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<AccountModel | String> {
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
