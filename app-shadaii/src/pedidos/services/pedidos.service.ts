import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePedidosDto } from '../dtos/create-pedidos.dto';
import { UpdatePedidosDto } from '../dtos/update-pedidos.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePedidosDto) {
    return this.prisma.pedidos.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.pedidos.findMany({
      include: {
        detalle_pedidos: true,
        stock_productos: true,
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.pedidos.findUnique({
      where: { id },
      include: {
        detalle_pedidos: true,
        stock_productos: true,
      }
    });
  }
  async update(id: string, data: UpdatePedidosDto) {
    return this.prisma.pedidos.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.pedidos.delete({
      where: { id },
    });
  }

}