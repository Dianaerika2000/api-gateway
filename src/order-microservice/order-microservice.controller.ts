import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { OrderMicroserviceService } from './order-microservice.service';
import { SupplierDto } from './dto/supplier.dto';
import { OrderDto } from './dto/order.dto';

@Controller('order-microservice')
export class OrderMicroserviceController {
  constructor(private readonly orderMicroserviceService: OrderMicroserviceService) {}

  @Get('suppliers')
  getAllSuppliers() {
    return this.orderMicroserviceService.getAllSuppliers();
  }

  @Get('suppliers/:id')
  getSupplierById(@Param('id', ParseIntPipe) id: number) {
    return this.orderMicroserviceService.getSupplierById(id);
  }

  @Post('suppliers')
  createSupplier(@Body() supplier: SupplierDto) {
    return this.orderMicroserviceService.createSupplier(supplier);
  }

  @Patch('suppliers/:id')
  updateSupplier(@Param('id', ParseIntPipe) id: number, @Body() supplier: SupplierDto) {
    return this.orderMicroserviceService.updateSupplier(id, supplier);
  }

  @Get('orders')
  getAllOrders() {
    return this.orderMicroserviceService.getAllOrders();
  }

  @Get('orders/:id')
  getOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.orderMicroserviceService.getOrderById(id);
  }

  @Post('orders')
  createOrder(@Body() order: OrderDto) {
    return this.orderMicroserviceService.createOrder(order);
  }

  @Put('orders/:id')
  updateOrder(@Param('id', ParseIntPipe) id: number, @Body() order: OrderDto) {
    return this.orderMicroserviceService.updateOrder(id, order);
  }

  @Get('order/supplier-delivery-time-average')
  getSupplierDeliveryTimeAverage() {
    return this.orderMicroserviceService.getSupplierDeliveryTimeAverage();
  }
}
