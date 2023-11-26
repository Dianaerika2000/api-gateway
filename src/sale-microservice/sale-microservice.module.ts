import { Module } from '@nestjs/common';
import { SaleMicroserviceService } from './sale-microservice.service';
import { SaleMicroserviceController } from './sale-microservice.controller';

@Module({
  controllers: [SaleMicroserviceController],
  providers: [SaleMicroserviceService],
})
export class SaleMicroserviceModule {}
