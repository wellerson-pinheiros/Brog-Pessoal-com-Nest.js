import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagemModule } from './postagem/postagem.module';
import { postagem } from './postagem/entities/postagem.entity';
import { Tema } from './Tema/entities/tema.entity';
import { TemaModule } from './Tema/tema.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'db_blogpessoal',
      entities: [postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    postagemModule,
    TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
