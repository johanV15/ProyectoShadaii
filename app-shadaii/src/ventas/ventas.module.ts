import { Module } from '@nestjs/common';
import { VentasService } from './services/ventas.service';
import { VentasController } from './controllers/ventas.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DetalleVentasService } from 'src/detalleVentas/services/detalle-ventas.service';
import { ProductosService } from 'src/productos/services/productos.service';
import { ClientesService } from 'src/clientes/services/clientes.service';
import { PagosService } from 'src/pagos/services/pagos.service';
import { StockService } from 'src/stockProductos/services/stock.service';

@Module({
  imports: [PrismaModule],
  controllers: [VentasController],
  providers: [VentasService, DetalleVentasService, ProductosService, ClientesService, PagosService, StockService],
})
export class VentasModule {}