import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto';

@Component({
  selector: 'app-tab-moto',
  templateUrl: './tab-moto.component.html',
  styleUrls: ['./tab-moto.component.css']
})
export class TabMotoComponent implements OnInit {
  titulo = "Relatório Motos";
  motos: Moto[] = [];

  constructor(private service: MotoService) { }

  ngOnInit() {
    this.motos = this.service.getMotos();
  }

  remover(moto: Moto){
    this.service.removeMotos(moto);
  }

}
