import { IsNotEmpty, IsOptional, IsString, Length, IsNumber } from 'class-validator';

export class CreateSlipDto {
  @Length(3, 3)
  @IsString()
  @IsNotEmpty()
  readonly banco: string;

  @IsString()
  @IsNotEmpty()
  readonly localPagamento: string;

  @Length(4, 4)
  @IsString()
  @IsNotEmpty()
  readonly agenciaCedente: string;

  @IsString()
  @IsNotEmpty()
  readonly codigoCedente: string;

  @Length(1, 1)
  @IsString()
  @IsNotEmpty()
  readonly codigoMoeda: string;

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
  readonly dataDocumento: string;

  @IsString()
  @IsOptional()
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

  @IsNumber()
  @IsNotEmpty()
  readonly valorDocumento: string;

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