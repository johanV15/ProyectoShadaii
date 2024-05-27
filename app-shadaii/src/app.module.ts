import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes/clientes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DetallePedidosModule } from './detallePedidos/detalle-pedidos.module';
import { DetalleVentasModule } from './detalleVentas/detalle-ventas.module';
import { GastosModule } from './gastos/gastos.module';
import { PagosModule } from './pagos/pagos.module';
import { StockModule } from './stockProductos/stock.module';
import { TipoGastosModule } from './tipoGasto/tipo-gastos.module';
import { VentasController } from './ventas/controllers/ventas.controller';
import { VentasService } from './ventas/services/ventas.service';
@Module({
  imports: [ClientesModule, PrismaModule, ProductosModule, VentasModule, PedidosModule, DetallePedidosModule, DetalleVentasModule, GastosModule, PagosModule, StockModule, TipoGastosModule],
  controllers: [AppController, VentasController],
  providers: [VentasService],
})
export class AppModule {}
