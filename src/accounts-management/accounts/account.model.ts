import { BelongsTo, Column, CreatedAt, DeletedAt, ForeignKey, HasMany, Model, NotEmpty, Table, UpdatedAt } from 'sequelize-typescript';
import { TransferModel } from "src/transfers-management/transfers/transfer.model";
import { ClientModel } from '../clients/client.model';

@Table
export class AccountModel extends Model {

  @NotEmpty
  @ForeignKey(() => ClientModel)
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

  @BelongsTo(() => ClientModel)
  cliente: ClientModel;

  @HasMany(() => TransferModel, 'contaDestinoId')
  transferenciasRecebidas: TransferModel[];

  @HasMany(() => TransferModel, 'contaOrigemId')
  transferenciasEfetuadas: TransferModel[];
}
