import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreateClientesDto } from '../dtos/create-clientes.dto';
import { UpdateClientesDto } from '../dtos/update-clientes.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientesDto) {
    return this.prisma.clientes.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.clientes.findMany();
  }

  async findOne(id: number) {
    return this.prisma.clientes.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateClientesDto) {
    return this.prisma.clientes.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.clientes.delete({
      where: { id },
    });
  }
}