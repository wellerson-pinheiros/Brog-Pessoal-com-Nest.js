import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import {Tema} from "./entities/tema.entity"
import { temaController } from "./controllers/tema.controller";
import { TemaService } from "./services/tema.service";
@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [temaController],
    exports : [TypeOrmModule]
})
export class TemaModule {}