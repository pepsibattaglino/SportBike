// import { Component, OnInit } from '@angular/core';
// import { Venda } from "../venda";
// import { VendaService } from "../venda.service";
// import { Moto } from "../moto";
// import { MotoService } from "../moto.service";
// import { Router, ActivatedRoute } from "@angular/router";

// @Component({
//   selector: 'app-form-cad-venda',
//   templateUrl: './form-cad-venda.component.html',
//   styleUrls: ['./form-cad-venda.component.css']
// })
// export class FormCadVendaComponent implements OnInit {
//   titulo = "Realizar Venda";
//   venda: Venda;
//   codigo: number;
//   motos: Moto[]=[];  
  
//   constructor(private motoService:MotoService, private vendaService:VendaService, private router:Router, private rota:ActivatedRoute) { }

//   ngOnInit() {
//     this.codigo = this.rota.snapshot.params['cod'];
//     if (isNaN(this.codigo)) {
//       this.venda = new Venda();
//     } else {
//       this.venda = Object.assign({}, this.vendaService.getVendaPorCodigo(this.codigo));
//     }

//     this.inicializarVenda();
//   }

//   salvarVenda(){
//     if (isNaN(this.codigo)) {
//       this.vendaService.addVenda(this.venda);
//       this.inicializarVenda(); 
//     } else {
//       this.vendaService.updateVenda(this.codigo, this.venda);
//     }
//     this.router.navigate(['/relatorio-vendas']);
//   }

//   inicializarVenda(){
//     this.venda = new Venda();
//     this.motos = this.motoService.getMotos();
//   }

//   limpar(){
//     this.venda = new Venda();
//   }

// }
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
      this.venda = new Venda();
    } else {
      this.venda = new Venda();//talves não precise
      this.vendaService.getVendaPorCodigo(this.codigo).subscribe(venda => { this.venda = venda;});
    }

    this.inicializarVenda();
  }


  salvarVenda(){
    if (isNaN(this.codigo)) {
      this.vendaService.addVenda(this.venda).subscribe(
        data => { 
          this.limpar();
          this.router.navigate(['/relatorio-vendas']);
        },
        erro => { console.log(erro); }
      );
      this.inicializarVenda(); 
    } else {
      this.vendaService.updateVenda(this.codigo, this.venda).subscribe(
        data => {this.limpar(); },
        erro => { console.log(erro); }
      );
    }
    this.router.navigate(['/relatorio-vendas']);
  }

  inicializarVenda(){
    this.venda = new Venda();
    this.motoService.getMotos().subscribe(
      data => {
        this.limpar(); 
        this.motos = data;
      },
      erro => { console.log(erro); }
    );
  }

  limpar(){
    this.venda = new Venda();
  }

}
