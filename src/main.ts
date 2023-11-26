import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
    }
  ));

  app.enableCors();
  await app.listen(3000);
  const config = new DocumentBuilder()
    .setTitle('API Gateway')
    .setDescription('API Gateway para mi aplicación')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  //await app.listen(3000);
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
