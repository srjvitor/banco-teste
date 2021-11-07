import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSlipDto } from './dto/create-slip.dto';
import { UpdateSlipDto } from './dto/update-slip.dto';
import { Slip } from './slip.model';

@Injectable()
export class SlipsService {
  constructor(
    @InjectModel(Slip)
    private slip: typeof Slip,
  ) { }

  async create(createSlipDto: CreateSlipDto): Promise<Slip> {
    return this.slip.create(createSlipDto);
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

  async findOne(id: number): Promise<Slip | String> {
    let slipExists = await this.slip.findOne({
      where: {
        id: id
      }
    });

    if (slipExists) {
      return slipExists;
    } else {
      return "Boleto não localizado."
    }
  }

  async update(id: number, updateSlipDto: UpdateSlipDto): Promise<Slip | String> {
    let slipExists = await this.slip.findOne({
      where: {
        id: id
      }
    });

    if (slipExists) {
      return slipExists.update(updateSlipDto);
    } else {
      return "Falha ao atualizar boleto, boleto não localizado."
    }
  }

  async delete(id: number): Promise<void | String> {
    const slipExists = await this.slip.findOne({
      where: {
        id: id
      }
    });

    if (slipExists) {
      await slipExists.destroy();
      return "Boleto excluído com sucesso."
    } else {
      return "Falha ao excluir boleto, boleto não foi localizado."
    }
  }
}

