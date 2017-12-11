import { Component, OnInit } from '@angular/core';
import { AcessorioService } from '../acessorio.service';
import { Acessorio } from '../acessorio';

@Component({
  selector: 'app-tab-acessorio',
  templateUrl: './tab-acessorio.component.html',
  styleUrls: ['./tab-acessorio.component.css']
})
export class TabAcessorioComponent implements OnInit {
  titulo = "Relatório Acessorios";
  acessorios: Acessorio[] = [];

  constructor(private service: AcessorioService) { }

  ngOnInit() {
    this.initTab()
  }

  initTab(){
    this.service.getAcessorios().subscribe(
      dados => { this.acessorios = dados; },
      erro => { console.log(erro); }
    );
  }

  remover(acessorio:Acessorio){
    this.service.removeAcessorios(acessorio).subscribe(
      dados => { this.initTab(); },
      erro => { console.log(erro); }
    );
  }

}