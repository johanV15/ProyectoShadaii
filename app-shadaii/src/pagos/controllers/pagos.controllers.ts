import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PagosService } from '../services/pagos.service';
import { CreatePagosDto } from '../dtos/create-pagos.dto';
import { UpdatePagosDto } from '../dtos/update-pagos.dto';

@Controller('Pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Post()
  create(@Body() createPagosDto: CreatePagosDto) {
    return this.pagosService.create(createPagosDto);
  }

  @Get()
  findAll() {
    return this.pagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagosDto: UpdatePagosDto) {
    return this.pagosService.update(+id, updatePagosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagosService.remove(+id);
  }
}