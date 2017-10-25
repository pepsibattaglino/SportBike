import { Component, OnInit } from '@angular/core';
import { Venda } from "../venda";
import { VendaService } from "../venda.service";
import { Moto } from "../moto";
import { MotoService } from "../moto.service";

@Component({
  selector: 'app-form-cad-venda',
  templateUrl: './form-cad-venda.component.html',
  styleUrls: ['./form-cad-venda.component.css']
})
export class FormCadVendaComponent implements OnInit {
  titulo = "Realizar Venda";
  venda: Venda;
  motos: Moto[]=[];  
  
  constructor(private motoService:MotoService, private vendaService:VendaService) { }

  ngOnInit() {
    this.inicializarVenda();
  }

  salvarVenda(){
    this.vendaService.addVenda(this.venda);
    this.inicializarVenda();
  }

  inicializarVenda(){
    this.venda = new Venda();
    this.motos = this.motoService.getMotos();
  }

}
