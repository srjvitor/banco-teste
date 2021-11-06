import { Column, CreatedAt, DeletedAt, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Account } from "../accounts/account.model";

@Table
export class Client extends Model {
  
  @Column
  nome: string;

  @Column
  cpf: string;

  @Column
  dataNascimento: Date;

  @Column
  nomePai: string;

  @Column
  nomeMae: string;

  @Column
  cidade: string;

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