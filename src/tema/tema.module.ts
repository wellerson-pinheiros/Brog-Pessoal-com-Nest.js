import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controller/tema.controller";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule {}