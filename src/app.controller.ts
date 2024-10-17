import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  
//EndPoint: Metodo que se ejecuta cuando
//          Se invoca determinada URL desde
//          el cliente http(Bruno)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

//EndPoint:
//1. Metodo(HTTP) a utilizar(junto a la ruta)
//2. Firma del metodo a invocar    
//3. Intrucciones a ejecutar
@Get("/prueba1")
mensaje():string{
  return "Mensaje de prueba 1"
}

@Get("/bootcamps/:id/curso/:cursoId")
mensajeBootcampPorId(@Param("id") id:string, 
                     @Param("cursoId") cursoId:string): string{
  return `Mostrando prueba Bootcamp con id: ${id} y el curso Id ${cursoId} `
}

@Get("identificacion/:id")
getIdentificacion(@Query("nombre") nombre:string,
                  @Query("edad") edad:number,
                  @Query("id") id:number,
                  @Query("ciudad")ciudad:string): Student{
  return new Student(id, nombre,edad, ciudad)
   
  }
 }

