import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePedidosDto } from '../dtos/create-pedidos.dto';
import { UpdatePedidosDto } from '../dtos/update-pedidos.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}
/*
  async create(data: CreatePedidosDto) {
    return this.prisma.pedidos.create({
      data,
    });
  }
*/
  async findAll() {
    return this.prisma.pedidos.findMany();
  }

  /*async findOne(id: number) {
    return this.prisma.pedidos.findUnique({
      where: { id },
    });
  }
  async update(id: number, data: UpdatePedidosDto) {
    return this.prisma.pedidos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.pedidos.delete({
      where: { id },
    });
  }*/

}