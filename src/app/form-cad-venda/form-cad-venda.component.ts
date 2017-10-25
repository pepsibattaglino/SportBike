import { Component, OnInit } from '@angular/core';
import { Venda } from "../venda";
import { VendaService } from "../venda.service";
import { Moto } from "../moto";
import { MotoService } from "../moto.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-cad-venda',
  templateUrl: './form-cad-venda.component.html',
  styleUrls: ['./form-cad-venda.component.css']
})
export class FormCadVendaComponent implements OnInit {
  titulo = "Realizar Venda";
  venda: Venda;
  codigo: number;
  motos: Moto[]=[];  
  
  constructor(private motoService:MotoService, private vendaService:VendaService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    if (isNaN(this.codigo)) {
      this.venda = new Venda()
      this.motos = this.motoService.getMotos();
    } else {
      this.venda = Object.assign({}, this.vendaService.getVendaPorCodigo(this.codigo));
    }

    this.inicializarVenda();
  }

  salvarVenda(){
    if (isNaN(this.codigo)) {
      this.vendaService.addVenda(this.venda);
      this.inicializarVenda(); 
    } else {
      this.vendaService.updateVenda(this.codigo, this.venda);
    }
    this.router.navigate(['/relatorio-vendas']);
  }

  inicializarVenda(){
    this.venda = new Venda();
    this.motos = this.motoService.getMotos();
  }

}
