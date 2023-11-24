import { Module } from '@nestjs/common';
import { OrderMicroserviceService } from './order-microservice.service';
import { OrderMicroserviceController } from './order-microservice.controller';

@Module({
  controllers: [OrderMicroserviceController],
  providers: [OrderMicroserviceService],
})
export class OrderMicroserviceModule {}
