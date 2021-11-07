import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateAccountDto {
  @IsNumber()
  @IsOptional()
  readonly clienteId: number;

  @IsString()
  @IsOptional()
  readonly banco: string;

  @IsString()
  @IsOptional()
  readonly agencia: string;

  @IsNumber()
  @IsOptional()
  readonly conta: string;
}