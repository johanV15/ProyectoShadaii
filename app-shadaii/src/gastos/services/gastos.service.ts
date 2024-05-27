import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreateGastosDto } from '../dtos/create-gastos.dto';
import { UpdateGastosDto } from '../dtos/update-gastos.dto';

@Injectable()
export class GastosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGastosDto) {
    return this.prisma.gastos.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.gastos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.gastos.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateGastosDto) {
    return this.prisma.gastos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.gastos.delete({
      where: { id },
    });
  }
}