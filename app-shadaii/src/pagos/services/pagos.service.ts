import { Injectable } from '@nestjs/common';
import { PrismaService } from '../.././prisma/prisma.service';
import { CreatePagosDto } from '../dtos/create-pagos.dto';
import { UpdatePagosDto } from '../dtos/update-pagos.dto';

@Injectable()
export class PagosService {
  constructor(private prisma: PrismaService) {}

  async create(createPagosDto: CreatePagosDto) {
    return this.prisma.pagos.create({
      data: createPagosDto,
    });
  }
  async findAll() {
    return this.prisma.pagos.findMany();
  }

  async findOne(id: number) {
    return this.prisma.pagos.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdatePagosDto) {
    return this.prisma.pagos.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.pagos.delete({
      where: { id },
    });
  }
}