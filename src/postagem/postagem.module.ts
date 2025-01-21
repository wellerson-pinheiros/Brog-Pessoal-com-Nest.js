
import { TemaService } from "src/Tema/services/tema.service";
import { TemaModule } from "src/Tema/tema.module";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}