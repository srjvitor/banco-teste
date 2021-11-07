import { Column, CreatedAt, DeletedAt, HasMany, Model, Table, UpdatedAt, NotEmpty } from 'sequelize-typescript';
import { Account } from "../accounts/account.model";

@Table
export class Client extends Model {

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

  @HasMany(() => Account)
  contas: Account[]
}