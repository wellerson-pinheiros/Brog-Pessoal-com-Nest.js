import {ValidationPipe} from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Wellerson Pinheiros Dos Santos","https://github.com/wellerson-pinheiros","wellersonpinheiros@outlook.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  
// mudando o fuzo horaio para menos 3 horas.
  process.env.TZ = '-03.00'; 

  // Habilitando globalmente a validação de dados

 app.useGlobalPipes(new ValidationPipe());

  // habilitando o cors na aplicação
 app.enableCors();
 
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
