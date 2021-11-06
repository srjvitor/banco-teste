import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientModel.create(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.findAll({
      order: ['id']
    });
  }

  async findOne(id: number): Promise<Client> {
    return this.clientModel.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    let client = await this.clientModel.findOne({
      where: {
        id: id
      }
    });

    return client.update(updateClientDto);
  }

  async delete(id: number): Promise<void> {
    const client = await this.clientModel.findOne({
      where: {
        id: id
      }
    });

    await client.destroy();
  }
}
