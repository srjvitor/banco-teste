import { Column, CreatedAt, DeletedAt, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Transfer } from "../transfers/transfer.model";

@Table
export class TransferType extends Model {

  @Column
  descricao: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => Transfer)
  contas: Transfer[]
}
