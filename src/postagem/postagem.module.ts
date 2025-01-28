import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "../tema/service/tema.service";
import { TemaModule } from "../tema/tema.module";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./service/postagem.service";
import { PostagemController } from "./controller/postagem.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}