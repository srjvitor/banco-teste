import { IsOptional, IsString } from 'class-validator';

export class UpdateSlipDto {
  @IsString()
  @IsOptional()
  readonly banco: string;

  @IsString()
  @IsOptional()
  readonly localPagamento: string;

  @IsString()
  @IsOptional()
  readonly agenciaCedente: string;

  @IsString()
  @IsOptional()
  readonly codigoCedente: string;

  @IsString()
  @IsOptional()
  readonly numeroDocumento: string;

  @IsString()
  @IsOptional()
  readonly especie: string;

  @IsString()
  @IsOptional()
  readonly aceite: string;

  @IsString()
  @IsOptional()
  readonly dataProcessamento: string;

  @IsString()
  @IsOptional()
  readonly usoBanco: string;

  @IsString()
  @IsOptional()
  readonly carteira: string;

  @IsString()
  @IsOptional()
  readonly especieMoeda: string;

  @IsString()
  @IsOptional()
  readonly vencimento: string;

  @IsString()
  @IsOptional()
  readonly valordocumento: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  readonly sacado: string;
}