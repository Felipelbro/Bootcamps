import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    @Get()
    getallbootcamps():string{
        return "Aqui se van a mostrar todos los bootcamps"
    }

    @Get(":id")
    getbootcampsById(@Param("id") id: number): string{
        return`Aqui se va a mostrar el Bootcamp cuyo id es: ${id}`
    }

    @Post(":")
    createBootcamp(): string{
        return "Aqui se va a guardar el bootcamp"
    }
}