import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSlipDto {
  @IsString()
  @IsNotEmpty()
  readonly banco: string;

  @IsString()
  @IsNotEmpty()
  readonly localPagamento: string;

  @IsString()
  @IsNotEmpty()
  readonly agenciaCedente: string;

  @IsString()
  @IsNotEmpty()
  readonly codigoCedente: string;

  @IsString()
  @IsNotEmpty()
  readonly numeroDocumento: string;

  @IsString()
  @IsNotEmpty()
  readonly especie: string;

  @IsString()
  @IsNotEmpty()
  readonly aceite: string;

  @IsString()
  @IsNotEmpty()
  readonly dataProcessamento: string;

  @IsString()
  @IsNotEmpty()
  readonly usoBanco: string;

  @IsString()
  @IsNotEmpty()
  readonly carteira: string;

  @IsString()
  @IsNotEmpty()
  readonly especieMoeda: string;

  @IsString()
  @IsNotEmpty()
  readonly vencimento: string;

  @IsString()
  @IsNotEmpty()
  readonly valordocumento: string;

  @IsString()
  @IsNotEmpty()
  readonly instrucoes: string;

  @IsString()
  @IsOptional()
  readonly mensagem1: string;

  @IsString()
  @IsOptional()
  readonly mensagem2: string;

  @IsString()
  @IsOptional()
  readonly mensagem3: string;

  @IsString()
  @IsNotEmpty()
  readonly sacado: string;
}