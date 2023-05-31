import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamenService {
  parqueAutomotor  = [
    { marca : "toyota", modelo : "corolla" , patente : "ab123cd"},
    { marca : "chevrolet", modelo : "corsa" , patente : "hoj010"},
    { marca : "Tesla", modelo : "ElonMuskGOD" , patente : "cca123"}
  ];
  public getList():any{
    return this.parqueAutomotor
  }
  public deleteByPatente(id:string):any{
    let patenteExiste = false;
    let patentePosicion = 0;
    for (let i = 0; i < this.parqueAutomotor.length; i++){
      if(id == this.parqueAutomotor[i].patente){
        patenteExiste = true;
        patentePosicion = i;
      }
    } if (patenteExiste){
      this.parqueAutomotor.splice(patentePosicion,1);
      return {
        "msj": `se elimino el vehiculo con patente ${id}`
      }
    } else { 
      return {"msj":`no se encontro ningun vehiculo con la patente ${id}`}
    }
  }
  public altaVehiculo(body):string{
    this.parqueAutomotor.push(body);
    return  (`se dio de alta el vehiculo marca:${body.marca} modelo:${body.modelo} patente: ${body.patente}`)
  }
}
