import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Transfer } from 'src/transfer-smanagement/transfers/transfer.model';
import { Client } from '../clients/client.model';

@Table
export class Account extends Model {

  @ForeignKey(() => Client)
  @Column
  clienteId: number;

  @Column
  banco: string;

  @Column
  agencia: string;

  @Column
  conta: string;

  @Column
  saldo: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => Client)
  cliente: Client;

  @HasMany(() => Transfer)
  transferencias: Transfer[];
}
