import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { ExamenService } from './examen.service';

@Controller('/examen')
export class ExamenController {
  constructor (private examenService: ExamenService){};

  @Get('/list')
  public getList():any{
    return this.examenService.getList();
  } 
  @Delete('/delete/:patente')
  public deleteByPatente(@Param('patente') patente:string){
    return this.examenService.deleteByPatente(patente);
  }
  @Post('/altaVehiculo')
  public altaVehiculo(@Body()body):string{
    return this.examenService.altaVehiculo(body);
  }
}
