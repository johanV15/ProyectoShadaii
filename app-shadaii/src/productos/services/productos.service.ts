import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductosDto } from '../dtos/create-productos.dto';
import { UpdateProductosDto } from '../dtos/update-productos.dto';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductosDto) {
    return this.prisma.productos.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.productos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.productos.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateProductosDto) {
    return this.prisma.productos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.productos.delete({
      where: { id },
    });
  }
}
