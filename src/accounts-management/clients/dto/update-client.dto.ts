import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  readonly nome: string;

  @IsString()
  @IsOptional()
  readonly cpf: string;

  @IsDateString()
  @IsOptional()
  readonly dataNascimento: Date;

  @IsString()
  @IsOptional()
  readonly nomePai: string;

  @IsString()
  @IsOptional()
  readonly nomeMae: string;

  @IsString()
  @IsOptional()
  readonly cidade: string;

  @IsString()
  @IsOptional()
  readonly estado: string;
}