
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_postagens"})

export class postagem{

    @PrimaryGeneratedColumn() // id INT Auto_Increment PRIMARY KEY
    id: number;

    @IsNotEmpty() // validação dos dados do objeto
    @Column({length: 100, nullable: false}) // varchar (100) not null
    titulo: string;

    @IsNotEmpty() // VALIDAÇÃO DOS DADOS DO OBJETO
    @Column({length: 1000, nullable:false}) // varchar(1000) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;


}