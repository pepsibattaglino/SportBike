import { Injectable } from '@angular/core';
import { Moto } from './moto';

@Injectable()
export class MotoService {

  autoincrement = 4;//porque já tem 3 no array
  motos: Moto[] = [
    {
      codigo: 1,
      modelo: "CBR 500R",
      marca: "Honda",
      cilindradas: 500,
      preco: 24000
    },
    {
      codigo: 2,
      modelo: "R3",
      marca: "Yamaha",
      cilindradas: 300,
      preco: 18000
    },
    {
      codigo: 3,
      modelo: "FZ6",
      marca: "Yamaha",
      cilindradas: 600,
      preco: 32000
    }
  ];

  constructor() { }

  addMoto(moto){
    moto.codigo = this.autoincrement++;
    this.motos.push(moto);
  }

  getMotos(){
    return this.motos;
  }

  removeMotos(moto: Moto){
    let indice = this.motos.indexOf(moto, 0);
    if (indice > -1) {
      this.motos.splice(indice, 1);
    }
  }

}
