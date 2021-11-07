import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AccountModel } from '../accounts/account.model';
import { ClientModel } from './client.model';
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(ClientModel)
    private clientModel: typeof ClientModel,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<ClientModel> {
    return this.clientModel.create(createClientDto);
  }

  async findAll(): Promise<ClientModel[] | String> {
    let clients = await this.clientModel.findAll({
      order: ['id'],
      include: [AccountModel]
    });

    if (clients.length) {
      return clients;
    } else {
      return "Nenhum cliente cadastrado."
    }
  }

  async findOne(id: number): Promise<ClientModel | String> {
    let client = await this.clientModel.findOne({
      where: {
        id: id
      },
      include: [AccountModel]
    });

    if (client) {
      return client;
    } else {
      return "Conta não localizada."
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<ClientModel | String> {
    let client = await this.clientModel.findOne({
      where: {
        id: id
      }
    });

    if (client) {
      return client.update(updateClientDto)
    } else {
      return "Falha ao atualizar cliente, conta não localizada."
    }
  }

  async delete(id: number): Promise<void | String> {
    const client = await this.clientModel.findOne({
      where: {
        id: id
      }
    });

    if (client) {
      await client.destroy();
      return "Cliente excluido com sucesso."
    } else {
      return "Falha ao excluir cliente, conta não foi encontrada."
    }
  }
}
