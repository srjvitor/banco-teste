import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsDateString()
  @IsNotEmpty()
  readonly dataNascimento: Date;

  @IsString()
  readonly nomePai: string;

  @IsString()
  @IsNotEmpty()
  readonly nomeMae: string;

  @IsString()
  @IsNotEmpty()
  readonly cidade: string;

  @IsString()
  @IsNotEmpty()
  readonly estado: string;
}