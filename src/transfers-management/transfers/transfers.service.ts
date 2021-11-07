import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TransferModel } from "./transfer.model";
import { TransferTypeModel } from '../transfer-types/transfer-type.model';
import { CreateTransferDto } from './dto/create-transfer.dto'
import { AccountModel } from 'src/accounts-management/accounts/account.model';

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(TransferModel)
    private transferModel: typeof TransferModel,

    @InjectModel(TransferTypeModel)
    private transferTypeModel: typeof TransferTypeModel,

    @InjectModel(AccountModel)
    private accountModel: typeof AccountModel
  ) { }

  async create(createTransferDto: CreateTransferDto): Promise<TransferModel | String> {

    let tipoTransferencia = await this.transferTypeModel.findOne({
      where: {
        id: createTransferDto.tipoTransferenciaId
      }
    })

    if (!tipoTransferencia) {
      return "Tipo de transferência inválida."
    }

    if (createTransferDto.tipoTransferenciaId == 1) {
      var contaOrigem = await this.accountModel.findOne({
        where: {
          id: createTransferDto.contaOrigemId
        }
      });

      if (!contaOrigem) {
        return "Conta de origem inválida."
      }
    }

    let contaDestino = await this.accountModel.findOne({
      where: {
        id: createTransferDto.contaDestinoId
      }
    });

    if (!contaDestino) {
      return "Conta de destino inválida."
    }

    let saldoTransferencia = parseFloat(createTransferDto.saldo);

    // Transferência entre contas
    if (createTransferDto.tipoTransferenciaId == 1) {
      var saldoOrigem = parseFloat(contaOrigem.saldo);

      if (saldoOrigem == 0 && saldoTransferencia > saldoOrigem) {
        return 'Saldo insuficiente para transferência.' 
      }

      saldoOrigem = saldoOrigem - saldoTransferencia;
      contaOrigem.saldo = saldoOrigem.toString();
      await contaOrigem.save()
    }

    var saldoDestino = parseFloat(contaDestino.saldo);
    saldoDestino = saldoDestino + saldoTransferencia;
    contaDestino.saldo = saldoDestino.toString();
    await contaDestino.save()

    return this.transferModel.create(createTransferDto);
  }
}
