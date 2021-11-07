import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transfer } from "./transfer.model";
import { TransferType } from '../transfer-types/transfer-type.model';
import { CreateTransferDto } from './dto/create-transfer.dto'
import { Account } from 'src/accounts-management/accounts/account.model';

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer)
    private transfer: typeof Transfer,

    @InjectModel(TransferType)
    private transferType: typeof TransferType,

    @InjectModel(Account)
    private account: typeof Account
  ) { }

  async create(createTransferDto: CreateTransferDto): Promise<Transfer | String> {

    var tipoTransferencia = await this.transferType.findOne({
      where: {
        id: createTransferDto.tipoTransferenciaId
      }
    })

    if (!tipoTransferencia) {
      return "Tipo de transferência inválida."
    }

    if (createTransferDto.tipoTransferenciaId == 1) {
      var contaOrigem = await this.account.findOne({
        where: {
          id: createTransferDto.contaOrigemId
        }
      });

      if (!contaOrigem) {
        return "Conta de origem inválida."
      }
    }

    let contaDestino = await this.account.findOne({
      where: {
        id: createTransferDto.contaDestinoId
      }
    });

    if (!contaDestino) {
      return "Conta de destino inválida."
    }

    let saldoTransferencia = parseFloat(createTransferDto.saldo);

    switch (createTransferDto.tipoTransferenciaId) {
      case 1:
        var saldoOrigem = parseFloat(contaOrigem.saldo);

        if (saldoOrigem == 0 && saldoTransferencia > saldoOrigem) {
          return 'Saldo insuficiente para transferência.'
        }

        saldoOrigem = saldoOrigem - saldoTransferencia;
        contaOrigem.saldo = saldoOrigem.toString();
        await contaOrigem.save()
        break;
      case 2:
        var saldoDestino = parseFloat(contaDestino.saldo);
        saldoDestino += saldoTransferencia;
        contaDestino.saldo = saldoDestino.toString();
        await contaDestino.save()
        break;

      case 3:
        var saldoDestino = parseFloat('00.01');
        saldoDestino = saldoDestino + saldoTransferencia;
        contaDestino.saldo = saldoDestino.toString();
        break;
    }

    return this.transfer.create(createTransferDto);
  }
}
