import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Account } from "../../accounts-management/accounts/account.model";

@Table
export class Transfer extends Model {

  @ForeignKey(() => Account)
  @Column
  contaOrigemId: number;

  @BelongsTo(() => Account, 'contaOrigemId')
  contaOrigem: Account;

  @ForeignKey(() => Account)
  @Column
  contaDestinoId: number;

  @BelongsTo(() => Account, 'contaDestinoId')
  contaDestino: Account;

  @Column
  saldo: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
