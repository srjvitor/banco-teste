import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTransferDto {
  @IsNumber()
  @IsNotEmpty()
  readonly tipoTransferenciaId: number;

  @IsNumber()
  @IsOptional()
  readonly contaOrigemId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly contaDestinoId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly saldo: string;
}