import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderMicroserviceModule } from './order-microservice/order-microservice.module';
import { ConfigModule } from '@nestjs/config';
import { SaleMicroserviceModule } from './sale-microservice/sale-microservice.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrderMicroserviceModule,
    SaleMicroserviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
