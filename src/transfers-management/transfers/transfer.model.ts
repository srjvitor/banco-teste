import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { AccountModel } from "../../accounts-management/accounts/account.model";
import { TransferTypeModel } from "../transfer-types/transfer-type.model";

@Table
export class TransferModel extends Model {

  @ForeignKey(() => TransferTypeModel)
  @Column
  tipoTransferenciaId: number;

  @BelongsTo(() => TransferTypeModel)
  tipoTransferencia: TransferTypeModel;

  @ForeignKey(() => AccountModel)
  @Column
  contaOrigemId: number;

  @BelongsTo(() => AccountModel, 'contaOrigemId')
  contaOrigem: AccountModel;

  @ForeignKey(() => AccountModel)
  @Column
  contaDestinoId: number;

  @BelongsTo(() => AccountModel, 'contaDestinoId')
  contaDestino: AccountModel;

  @Column
  saldo: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
