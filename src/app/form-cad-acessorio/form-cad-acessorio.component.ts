import { Component, OnInit } from '@angular/core';
import { Acessorio } from "../acessorio";
import { AcessorioService } from "../acessorio.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-cad-acessorio',
  templateUrl: './form-cad-acessorio.component.html',
  styleUrls: ['./form-cad-acessorio.component.css']
})
export class FormCadAcessorioComponent implements OnInit {
  titulo = "Cadastrar Acessorio";
  acessorio: Acessorio;
  codigo: number;

  constructor(private service:AcessorioService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];    
    if (isNaN(this.codigo)) {
      this.acessorio = new Acessorio();
    } else {
      this.acessorio = new Acessorio();
      this.service.getAcessorioPorCodigo(this.codigo).subscribe(acessorio => { this.acessorio = acessorio;});
    }
  }
  
  salvarAcessorio(){
    if (isNaN(this.codigo)) {
      this.service.addAcessorio(this.acessorio).subscribe(
        data => { 
          this.limpar(); 
          this.router.navigate(['/relatorio-acessorios']); 
        },
        erro => { console.log(erro); }
      );
      this.limpar();  
    } else {
      this.service.updateAcessorio(this.codigo, this.acessorio).subscribe(
        data => { 
          this.limpar(); 
          this.router.navigate(['/relatorio-acessorios']);
        },
        erro => { console.log(erro); }
      );
    }
    // this.router.navigate(['/relatorio-acessorios']);
  }

  limpar(){
    this.acessorio = new Acessorio();
  }

}