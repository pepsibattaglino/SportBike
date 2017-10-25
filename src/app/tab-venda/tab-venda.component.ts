import { Component, OnInit } from '@angular/core';
import { Venda } from '../venda';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-tab-venda',
  templateUrl: './tab-venda.component.html',
  styleUrls: ['./tab-venda.component.css']
})
export class TabVendaComponent implements OnInit {

  vendas: Venda[] = [];
  
    constructor(private service: VendaService) { }
  
    ngOnInit() {
      this.vendas = this.service.getVendas();
    }

}
