import { UseGuards, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";

import { TemaService } from "../service/tema.service";
import { Tema } from "../entities/tema.entity";


@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/tema")
@ApiBearerAuth()
export class TemaController {
  constructor(private readonly temaService: TemaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.temaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
    return this.temaService.findByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Tema: Tema): Promise<Tema> {
    return this.temaService.create(Tema);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Tema: Tema): Promise<Tema> {
    return this.temaService.update(Tema);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.temaService.delete(id);
  }

}