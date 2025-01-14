import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";


@Injectable()
export class PostagemService{

    constructor(@InjectRepository(postagem)
    private postagemRepository: Repository<postagem>
){}
async findall():Promise<postagem[]>{
    return this.postagemRepository.find(); // select * from tb_postagens;
}
 
}