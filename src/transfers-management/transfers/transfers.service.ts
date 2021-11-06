import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transfer } from './transfer.model';
import { CreateTransferDto } from './dto/create-transfer.dto'
import { UpdateTransferDto } from './dto/update-transfer.dto'
import { Account } from 'src/accounts-management/accounts/account.model';

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer)
    private transferModel: typeof Transfer,

    @InjectModel(Account)
    private accountModel: typeof Account
  ) { }

  async create(createTransferDto: CreateTransferDto): Promise<Transfer | String> {

    const contaOrigem = await this.accountModel.findOne({
      where: {
        id: createTransferDto.contaOrigemId
      }
    });

    if (!contaOrigem) {
      return "Conta de origem inválida."
    }

    const contaDestino = await this.accountModel.findOne({
      where: {
        id: createTransferDto.contaDestinoId
      }
    });

    if (!contaDestino) {
      return "Conta de destino inválida."
    }

    if (contaOrigem.saldo > 0 && createTransferDto.saldo <= contaOrigem.saldo) {

      contaOrigem.saldo -= createTransferDto.saldo;
      console.log(createTransferDto.saldo)
      await contaOrigem.save()

      contaDestino.saldo += createTransferDto.saldo;
      console.log(createTransferDto.saldo)
      await contaDestino.save()

      return this.transferModel.create(createTransferDto);

    } else {
      return 'Saldo insuficiente'
    }
  }

  async findAll(): Promise<Transfer[] | String> {
    const transfers = await this.transferModel.findAll({
      order: ['id'],
      include: [{
        model: Account,
        as: 'contaOrigem'
      },
      {
        model: Account,
        as: 'contaDestino'
      }]
    });

    if (transfers.length) {
      return transfers;
    } else {
      return "Nenhuma transferência efetuada."
    }
  }

  async findOne(id: number): Promise<Transfer | String> {
    const transfer = await this.transferModel.findOne({
      where: {
        id: id
      },
      include: [{
        model: Account,
        as: 'contaOrigem'
      },
      {
        model: Account,
        as: 'contaDestino'
      }]
    });

    if (transfer) {
      return transfer;
    } else {
      return "Transferência não localizada."
    }
  }

  async update(id: number, updateTransferDto: UpdateTransferDto): Promise<Transfer | String> {
    const transfer = await this.transferModel.findOne({
      where: {
        id: id
      }
    });

    if (transfer) {
      return transfer.update(UpdateTransferDto)
    } else {
      return "Falha ao atualizar transferência, transferência não localizada."
    }
  }

  async delete(id: number): Promise<void | String> {
    const transfer = await this.transferModel.findOne({
      where: {
        id: id
      }
    });

    if (transfer) {
      await transfer.destroy();
      return "Transferência excluida com sucesso."
    } else {
      return "Falha ao excluir transferência, transferência não foi encontrada."
    }
  }
}
