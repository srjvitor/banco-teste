import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSlipDto } from './dto/create-slip.dto';
import { UpdateSlipDto } from './dto/update-slip.dto';
import { Slip } from './slip.model';
import * as moment from 'moment';

@Injectable()
export class SlipsService {
  constructor(
    @InjectModel(Slip)
    private slip: typeof Slip,
  ) { }

  async create(createSlipDto: CreateSlipDto): Promise<Slip> {

    // Campo 1
    let codBancoDestinatario = createSlipDto.banco;
    let codMoeda = createSlipDto.codigoMoeda; // Real
    let posicoes20a24codBarras = this.conjuntoDeNumeroAleatorios(5); // 5 digitos
    let digVerificadorCampo1 = '0';
    let campo1 = codBancoDestinatario + codMoeda + posicoes20a24codBarras + digVerificadorCampo1;

    // Campo 2
    let posicoes25a34codBarras = this.conjuntoDeNumeroAleatorios(10); // 10 digitos
    let digVerificadorCampo2 = '0';
    let campo2 = posicoes25a34codBarras + digVerificadorCampo2;

    // Campo 3
    let posicoes35a44codBarras = this.conjuntoDeNumeroAleatorios(10); // 10 digitos
    let digVerificadorCampo3 = '0';
    let campo3 = posicoes35a44codBarras + digVerificadorCampo3;

    // Campo 4
    let digVerificadorCampo4 = '0';
    let campo4 = digVerificadorCampo4;

    // Campo 5
    let fatorVencimento = this.calculoFatorVencimento(createSlipDto.vencimento);
    let valorBoletodePagamento = this.addZerosAesquerda(createSlipDto.valorDocumento, 10); // 10 digitos
    let campo5 = fatorVencimento + valorBoletodePagamento;

    let dataProcessamento = moment().format('YYYY-MM-DD');
    let linhaDigitavel = campo1 + campo2 + campo3 + campo4 + campo5;

    return this.slip.create({
      dataProcessamento,
      linhaDigitavel,
      ...createSlipDto
    });
  }

  async findAll(): Promise<Slip[] | String> {
    let slipList = await this.slip.findAll({
      order: ['id'],
    });

    if (slipList.length) {
      return slipList;
    } else {
      return "Nenhum boleto cadastrado."
    }
  }

  async findOne(linhaDigitavel: number): Promise<Slip | String> {
    let slipExists = await this.slip.findOne({
      where: {
        linhaDigitavel
      }
    });

    if (slipExists) {
      return slipExists;
    } else {
      return "Boleto não localizado."
    }
  }

  addZerosAesquerda(num, len) {

    let valorBoleto = num.toString()

    // replace para retirar '.' e ',' do valor do boleto
    var numberWithZeroes = String(valorBoleto.replace(/[^0-9]/g, ''));
    var counter = numberWithZeroes.length;

    while (counter < len) {

      numberWithZeroes = "0" + numberWithZeroes;

      counter++;

    }

    return numberWithZeroes;
  }

  conjuntoDeNumeroAleatorios(tamanho) {
    let contador = 1;
    let numeroAleatorio = '';

    while (contador < tamanho) {
      numeroAleatorio += Math.floor(Math.random() * 10).toString()
      contador++;
    }

    return numeroAleatorio;
  }

  calculoFatorVencimento(dataVencimento) {

    // Para calcular dias de vencimento desde a data base do Banco Central
    var start = moment(dataVencimento, "YYYY-MM-DD");
    var end = moment("1997-10-07", "YYYY-MM-DD");

    // Campo 5
    let fatorVencimento = moment.duration(start.diff(end)).asDays();

    return fatorVencimento
  }

  calculoLinhaDigitavel(): void {

    function calculoDigitoVerificadorCodBarras(numero: string): number {

      const arrayReverso = numero.split('').reverse()

      const arrayMultiplicacao = [2, 3, 4, 5, 6, 7, 8, 9]

      let somatoria = 0;
      let posicaoMultiplicacaoArray = 0;

      for (const index in arrayReverso) {

        if (parseInt(index) != 5) {
          somatoria += parseInt(arrayReverso[index]) * arrayMultiplicacao[posicaoMultiplicacaoArray];

          if (posicaoMultiplicacaoArray == arrayMultiplicacao.length - 1) {
            posicaoMultiplicacaoArray = 0
          } else {
            posicaoMultiplicacaoArray++
          }
        }
      }

      let modulo11 = somatoria % 11;
      let subtracao = 11 - modulo11;

      switch (subtracao) {
        case 0:
          return 1;
        case 10:
          return 1;
        case 11:
          return 1;
        case 10 || 11:
          return subtracao;
      }

    }
  }
}

