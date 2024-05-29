import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { CreateClientesDto } from '../dtos/create-clientes.dto';
import { UpdateClientesDto } from '../dtos/update-clientes.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClientesDto: CreateClientesDto) {
    return this.clientesService.create(createClientesDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }
  @Get()
  async GetClientes() {
    const clientes = await this.clientesService.findAll()
    return{clientes}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientesDto: UpdateClientesDto) {
    return this.clientesService.update(+id, updateClientesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}