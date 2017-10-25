import { Component, OnInit } from '@angular/core';
import { Moto } from "../moto";
import { MotoService } from "../moto.service";

@Component({
  selector: 'app-form-cad-moto',
  templateUrl: './form-cad-moto.component.html',
  styleUrls: ['./form-cad-moto.component.css']
})
export class FormCadMotoComponent implements OnInit {

  moto: Moto;

  constructor(private service:MotoService) { }

  ngOnInit() {
    this.moto = new Moto();
  }

  salvarMoto(){
    this.service.addMoto(this.moto);
    this.limpar();
    // this.router.navigate(['/tabela']);
  }

  limpar(){
    this.moto = new Moto();
  }

}
