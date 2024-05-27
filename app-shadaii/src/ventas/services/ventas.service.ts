import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreateVentasDto } from '../dtos/create-ventas.dto';
import { UpdateVentasDto } from '../dtos/update-ventas.dto';

@Injectable()
export class VentasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateVentasDto) {
    return this.prisma.ventas.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.ventas.findMany();
  }

  async findOne(id: number) {
    return this.prisma.ventas.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateVentasDto) {
    return this.prisma.ventas.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.ventas.delete({
      where: { id },
    });
  }
}