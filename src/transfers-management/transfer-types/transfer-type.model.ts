import { Column, CreatedAt, DeletedAt, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { TransferModel } from "../transfers/transfer.model";

@Table
export class TransferTypeModel extends Model {

  @Column
  descricao: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => TransferModel)
  contas: TransferModel[]
}
