import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoGastosDto } from '../dtos/create-tipo-gastos.dto';
import { UpdateTipoGastosDto } from '../dtos/update-tipo-gastos.dto';

@Injectable()
export class TipoGastosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTipoGastosDto) {
    return this.prisma.tipo_gasto.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.tipo_gasto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tipo_gasto.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateTipoGastosDto) {
    return this.prisma.tipo_gasto.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.tipo_gasto.delete({
      where: { id },
    });
  }
}