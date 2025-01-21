import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";




@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

 
async findById(id: number): Promise <Postagem> {

    // SELECT * FROM tb_postagens where id = ?;
    const postagem = await this.postagemRepository.findOne({
        where:
        {
            id
        },
        relations:{
            tema:true
        }
    })


    if(!postagem)
        throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND)
    return postagem;    
}

async findByTitulo (titulo:string): Promise<Postagem[]>{
    return this.postagemRepository.find({
        where:{
            titulo: ILike(`%${titulo}%`)
        },
        relations:{
            tema:true
        }
    });
    }
    async create(postagem: Postagem): Promise<Postagem>{
        //insert into tb_postagens (titulo,texto) values (?, ?)
        return await this.postagemRepository.save(postagem)
    }


    async update(postagem: Postagem): Promise<Postagem>{

        await this.findById(postagem.id)
    
        return await this.postagemRepository.save(postagem);

}

async delete(id: number): Promise<DeleteResult> {
       
    await this.findById(id);
 
    return await this.postagemRepository.delete(id);

}

}