import { Column, CreatedAt, DeletedAt, Model, Table, UpdatedAt, NotEmpty } from 'sequelize-typescript';
@Table
export class SlipModel extends Model {

  @NotEmpty
  @Column
  linhaDigitavel: string;

  @Column
  descricao: string;

  @NotEmpty
  @Column
  banco: string;

  @Column
  localPagamento: string;

  @NotEmpty
  @Column
  agenciaCedente: string;

  @NotEmpty
  @Column
  codigoCedente: string;

  @NotEmpty
  @Column
  numeroDocumento: string;

  @Column
  especie: string;

  @Column
  aceite: string;

  @NotEmpty
  @Column
  dataProcessamento: string;

  @Column
  usoBanco: string;

  @NotEmpty
  @Column
  carteira: string;

  @Column
  especieMoeda: string;

  @NotEmpty
  @Column
  vencimento: string;

  @NotEmpty
  @Column
  valordocumento: string;

  @Column
  instrucoes: string;

  @Column
  mensagem1: string;

  @Column
  mensagem2: string;

  @Column
  mensagem3: string;

  @NotEmpty
  @Column
  sacado: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
