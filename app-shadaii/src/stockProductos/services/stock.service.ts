import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStockDto } from '../dtos/create-stock.dto';
import { UpdateStockDto } from '../dtos/update-stock.dto';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStockDto) {
    return this.prisma.stock_productos.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.stock_productos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.stock_productos.findUnique({
      where: { id },
    });
  }

  async updateStock(id_producto: number, cantidad: number) {
    // Obtener el stock actual del producto
    const stockProducto = await this.prisma.stock_productos.findFirst({
      where: { id_producto },
    });

    if (!stockProducto || stockProducto.stock < cantidad) {
      throw new BadRequestException('Stock insuficiente');
    }

    // Actualizar el stock
    await this.prisma.stock_productos.update({
      where: { id: stockProducto.id },
      data: {
        stock: stockProducto.stock - cantidad,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.stock_productos.delete({
      where: { id },
    });
  }
}