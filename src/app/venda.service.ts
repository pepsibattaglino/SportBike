import { Injectable } from '@angular/core';
import { Venda } from "./venda";

@Injectable()
export class VendaService {

  autoincrement = 1;
  vendas: Venda[]=[];

  constructor() { }

  addVenda(venda){
    this.vendas.push(venda);
    this.autoincrement++;
  }

  getVendas(){
    return this.vendas;
  }

  removerVenda(venda: Venda){
    let indice = this.vendas.indexOf(venda, 0);
    if (indice > -1) {
      this.vendas.splice(indice, 1);
    }
  }

  atualizaVenda(codigo: number, venda: Venda){
    let indice = this.vendas.indexOf(this.getProdutoPorCodigo(codigo), 0);
    this.vendas[indice] = venda;
  }

}
