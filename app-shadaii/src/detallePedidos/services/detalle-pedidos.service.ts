import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreateDetallePedidosDto } from '../dtos/create-detalle-pedidos.dto';
import { UpdateDetallePedidosDto } from '../dtos/update-detalle-pedidos.dto';

@Injectable()
export class DetallePedidosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDetallePedidosDto) {
    return this.prisma.detalle_pedidos.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.detalle_pedidos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.detalle_pedidos.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateDetallePedidosDto) {
    return this.prisma.detalle_pedidos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.detalle_pedidos.delete({
      where: { id },
    });
  }
}