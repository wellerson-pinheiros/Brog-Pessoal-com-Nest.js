import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { create } from "domain";


@Injectable()
export class PostagemService{
    findAll(): Promise<postagem[]> {
        throw new Error("Method not implemented.");
    }

    constructor(@InjectRepository(postagem)
    private postagemRepository: Repository<postagem>
){}
async findall(id: number):Promise<postagem[]>{
    return this.postagemRepository.find(); // select * from tb_postagens;
}
 
async findById(id: number): Promise <postagem> {

    // SELECT * FROM tb_postagens where id = ?;
    const postagem = await this.postagemRepository.findOne({
        where:
        {
            id
        }
    })

    if(!postagem)
        throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND)
    return postagem;    
}

async findByTitulo (titulo:string): Promise<postagem[]>{
    return this.postagemRepository.find({
        where:{
            titulo: ILike(`%${titulo}%`)
        }
    });
    }
    async create(postagem: postagem): Promise<postagem>{
        //insert into tb_postagens (titulo,texto) values (?, ?)
        return await this.postagemRepository.save(postagem)
    }


    async update(postagem: postagem): Promise<postagem>{

        await this.findById(postagem.id)
    
        return await this.postagemRepository.save(postagem);

}

async delete(id: number): Promise<DeleteResult> {
       
    await this.findById(id);
 
    return await this.postagemRepository.delete(id);

}

}