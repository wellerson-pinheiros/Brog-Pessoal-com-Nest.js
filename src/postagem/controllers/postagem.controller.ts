import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { postagem } from "../entities/postagem.entity";



@Controller("/postagens")
export class PostagemController{
    
    constructor(
        private readonly postagemService: PostagemService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findall(): Promise<postagem[]>{
        return this.postagemService.findall();
    }
}