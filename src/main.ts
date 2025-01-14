import {ValidationPipe} from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  // Habilitando globalmente a validação de dados

 app.useGlobalPipes(new ValidationPipe());

  // habilitando o cors na aplicação
 app.enableCors();
 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
