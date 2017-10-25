import { Injectable } from '@angular/core';
import { Venda } from "./venda";

@Injectable()
export class VendaService {

  autoincrement = 1;
  vendas: Venda[]=[];

  constructor() { }

  addVenda(venda){
    venda.codigo = this.autoincrement++;
    this.vendas.push(venda);
  }

  getVendas(){
    return this.vendas;
  }

  removeVenda(venda: Venda){
    let indice = this.vendas.indexOf(venda, 0);
    if (indice > -1) {
      this.vendas.splice(indice, 1);
    }
  }

  getVendaPorCodigo(codigo: number){
    return (this.vendas.find(venda => venda.codigo == codigo));
  }

  updateVenda(codigo: number, venda: Venda){
    let indice = this.vendas.indexOf(this.getVendaPorCodigo(codigo), 0);
    this.vendas[indice] = venda;
  }

}
