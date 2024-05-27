import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStockDto } from '../dtos/create-stock.dto';
import { UpdateStockDto } from '../dtos/update-stock.dto';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  /*async create(data: CreateStockDto) {
    return this.prisma.stock_productos.create({
      data,
    });
  }
*/
  async findAll() {
    return this.prisma.stock_productos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.stock_productos.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateStockDto) {
    return this.prisma.stock_productos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.stock_productos.delete({
      where: { id },
    });
  }
}