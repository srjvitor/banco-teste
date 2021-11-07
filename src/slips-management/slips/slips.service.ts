import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSlipDto } from './dto/create-slip.dto';
import { UpdateSlipDto } from './dto/update-slip.dto';
import { SlipModel } from './slip.model';

@Injectable()
export class SlipsService {
  constructor(
    @InjectModel(SlipModel)
    private slipModel: typeof SlipModel,
  ) { }

  async create(createSlipDto: CreateSlipDto): Promise<SlipModel> {
    return this.slipModel.create(createSlipDto);
  }

  async findAll(): Promise<SlipModel[] | String> {
    let slipList = await this.slipModel.findAll({
      order: ['id'],
    });

    if (slipList.length) {
      return slipList;
    } else {
      return "Nenhum boleto cadastrado."
    }
  }

  async findOne(id: number): Promise<SlipModel | String> {
    let slipExists = await this.slipModel.findOne({
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

  async update(id: number, updateSlipDto: UpdateSlipDto): Promise<SlipModel | String> {
    let slipExists = await this.slipModel.findOne({
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
    const slipExists = await this.slipModel.findOne({
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

