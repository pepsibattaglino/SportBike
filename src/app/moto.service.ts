import { Injectable } from '@angular/core';
import { Moto } from './moto';

@Injectable()
export class MotoService {

  motos: Moto[] = [
    {
      modelo: "CBR 500R",
      marca: "Honda",
      cilindradas: 500,
      preco: 24000
    },
    {
      modelo: "R3",
      marca: "Yamaha",
      cilindradas: 300,
      preco: 18000
    },
    {
      modelo: "FZ6",
      marca: "Yamaha",
      cilindradas: 600,
      preco: 32000
    }
  ];

  constructor() { }

  getMotos(){
    return this.motos;
  }

  addMoto(moto: Moto){
    this.motos.push(moto);
  }
}
