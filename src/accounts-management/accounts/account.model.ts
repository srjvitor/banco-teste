import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, HasMany, Model, NotEmpty, Table, UpdatedAt } from 'sequelize-typescript';
import { Transfer } from "src/transfers-management/transfers/transfer.model";
import { Client } from '../clients/client.model';

@Table
export class Account extends Model {

  @NotEmpty
  @ForeignKey(() => Client)
  @Column
  clienteId: number;
  
  @NotEmpty
  @Column
  banco: string;
  
  @NotEmpty
  @Column
  agencia: string;
  
  @NotEmpty
  @Column
  conta: string;
  
  @NotEmpty
  @Column
  saldo: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => Client)
  cliente: Client;

  @HasMany(() => Transfer, 'contaDestinoId')
  transferenciasRecebidas: Transfer[];

  @HasMany(() => Transfer, 'contaOrigemId')
  transferenciasEfetuadas: Transfer[];
}
