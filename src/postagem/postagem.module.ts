import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";
@Module({
    imports: [TypeOrmModule.forFeature([postagem])],
    controllers: [PostagemController],
    providers: [PostagemService],
    exports: [TypeOrmModule],
})
export class postagemModule {}