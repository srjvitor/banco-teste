import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Account as ContaOrigem } from "../../accounts-management/accounts/account.model";
import { Account as ContaDestino } from "../../accounts-management/accounts/account.model";

@Table
export class Transfer extends Model {

  @ForeignKey(() => ContaOrigem)
  @Column
  contaOrigemId: number

  @ForeignKey(() => ContaDestino)
  @Column
  contaDestinoId: number

  @Column
  saldo: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => ContaOrigem)
  contaOrigem: ContaOrigem

  @BelongsTo(() => ContaDestino)
  contaDestino: ContaDestino
}