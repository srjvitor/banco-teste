import { Column, CreatedAt, DeletedAt, HasMany, Model, Table, UpdatedAt, NotEmpty } from 'sequelize-typescript';
import { AccountModel } from "../accounts/account.model";

@Table
export class ClientModel extends Model {
  
  @NotEmpty
  @Column
  nome: string;

  @NotEmpty
  @Column
  cpf: string;

  @NotEmpty
  @Column
  dataNascimento: Date;

  @Column
  nomePai: string;

  @NotEmpty
  @Column
  nomeMae: string;

  @NotEmpty
  @Column
  cidade: string;

  @NotEmpty
  @Column
  estado: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => AccountModel)
  contas: AccountModel[]
}