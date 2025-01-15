import {ValidationPipe} from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
// mudando o fuzo horaio para menos 3 horas.
  process.env.TZ = '-03.00'; 

  // Habilitando globalmente a validação de dados

 app.useGlobalPipes(new ValidationPipe());

  // habilitando o cors na aplicação
 app.enableCors();
 
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
