import { Controller, Get, Post, Body, Param, Patch, Delete, Render } from '@nestjs/common';
import { VentasService } from '../services/ventas.service';
import { CreateVentasDto } from '../dtos/create-ventas.dto';
import { UpdateVentasDto } from '../dtos/update-ventas.dto';
import { ProductosService } from 'src/productos/services/productos.service';
import { ClientesService } from 'src/clientes/services/clientes.service';
import { DetalleVentasService } from 'src/detalleVentas/services/detalle-ventas.service';
import { PagosService } from 'src/pagos/services/pagos.service';
import { StockService } from 'src/stockProductos/services/stock.service';

@Controller('Ventas')
export class VentasController {
  constructor(
    private readonly ventasService: VentasService,
    private readonly productosService: ProductosService,
    private readonly clientesService: ClientesService,
    private readonly detalleVentasService: DetalleVentasService,
    private readonly pagosService: PagosService,
    private readonly stockService: StockService,
  ) {}

  @Post()
  create(@Body() createVentasDto: CreateVentasDto) {
    return this.ventasService.create(createVentasDto);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }

  @Get('view')
  @Render('ventas')
  async getVentas() {
    const ventas = await this.ventasService.findAll();
    const clientes = await this.clientesService.findAll();
    const detalleVentas = await this.detalleVentasService.findAll();
    const productos = await this.productosService.findAll();
    const pagos = await this.pagosService.findAll();
    const stock = await this.stockService.findAll();
    return { ventas, clientes, detalleVentas, productos, pagos, stock };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentasDto: UpdateVentasDto) {
    return this.ventasService.update(+id, updateVentasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }
}
