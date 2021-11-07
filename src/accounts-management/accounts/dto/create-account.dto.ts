import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  @IsNotEmpty()
  readonly clienteId: number;

  @IsString()
  @IsNotEmpty()
  readonly banco: string;

  @IsString()
  @IsNotEmpty()
  readonly agencia: string;

  @IsNumber()
  @IsNotEmpty()
  readonly conta: string;

  @IsNumber()
  @IsNotEmpty()
  readonly saldo: string;
}