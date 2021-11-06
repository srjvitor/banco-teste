import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transfer } from './transfer.model';
import { CreateTransferDto } from './dto/create-transfer.dto'
import { UpdateTransferDto } from './dto/update-transfer.dto'

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer)
    private transferModel: typeof Transfer,
  ) { }

  async create(createTransferDto: CreateTransferDto): Promise<Transfer> {
    return this.transferModel.create(createTransferDto);
  }

  async findAll(): Promise<Transfer[]> {
    return this.transferModel.findAll({
      order: ['id']
    });
  }

  async findOne(id: number): Promise<Transfer> {
    return this.transferModel.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTransferDto: UpdateTransferDto): Promise<Transfer> {
    let transferencia = await this.transferModel.findOne({
      where: {
        id: id
      }
    });

    return transferencia.update(updateTransferDto);
  }

  async delete(id: number): Promise<void> {
    const transferencia = await this.transferModel.findOne({
      where: {
        id: id
      }
    });

    await transferencia.destroy();
  }
}
