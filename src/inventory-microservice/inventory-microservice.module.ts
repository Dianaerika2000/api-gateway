import { Module } from '@nestjs/common';
import { InventoryMicroserviceService } from './inventory-microservice.service';
import { InventoryMicroserviceController } from './inventory-microservice.controller';

@Module({
  controllers: [InventoryMicroserviceController],
  providers: [InventoryMicroserviceService],
})
export class InventoryMicroserviceModule {}
