import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from '../accounts/account.model';
import { Client } from './client.model';
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private client: typeof Client,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.client.create(createClientDto);
  }

  async findAll(): Promise<Client[] | String> {
    let clients = await this.client.findAll({
      order: ['id'],
      include: [Account]
    });

    if (clients.length) {
      return clients;
    } else {
      return "Nenhum cliente cadastrado."
    }
  }

  async findOne(id: number): Promise<Client | String> {
    let client = await this.client.findOne({
      where: {
        id: id
      },
      include: [Account]
    });

    if (client) {
      return client;
    } else {
      return "Conta não localizada."
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client | String> {
    let client = await this.client.findOne({
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
    const client = await this.client.findOne({
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
