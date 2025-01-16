import { IsNotEmpty } from "class-validator";
import { postagem } from "src/postagem/entities/postagem.entity";
import { Column,Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @OneToMany(() => postagem, (postagem) => postagem.tema)
    postagem: postagem[];
}