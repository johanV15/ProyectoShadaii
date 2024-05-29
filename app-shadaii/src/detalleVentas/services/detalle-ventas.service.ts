import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreateDetalleVentasDto } from '../dtos/create-detalle-ventas.dto';
import { UpdateDetalleVentasDto } from '../dtos/update-detalle-ventas.dto';

@Injectable()
export class DetalleVentasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDetalleVentasDto) {
    return this.prisma.detalle_ventas.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.detalle_ventas.findMany({
      include: {
        venta: true,
        cliente: true,
        producto: true,
      }
    });
  }
  async findOne(id: number) {
    return this.prisma.detalle_ventas.findUnique({
      where: { id },
      include: {
        venta: true,
        cliente: true,
        producto: true,
      }
    });
  }

  async update(id: number, data: UpdateDetalleVentasDto) {
    return this.prisma.detalle_ventas.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.detalle_ventas.delete({
      where: { id },
    });
  }
}