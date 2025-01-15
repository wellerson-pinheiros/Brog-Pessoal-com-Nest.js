import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagemModule } from './postagem/postagem.module';
import { postagem } from './postagem/entities/postagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'db_blogpessoal',
      entities: [postagem],
      synchronize: true,
      logging: true,
    }),
    postagemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
