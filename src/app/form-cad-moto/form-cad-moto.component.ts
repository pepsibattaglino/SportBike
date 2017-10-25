import { Component, OnInit } from '@angular/core';
import { Moto } from "../moto";
import { MotoService } from "../moto.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-cad-moto',
  templateUrl: './form-cad-moto.component.html',
  styleUrls: ['./form-cad-moto.component.css']
})
export class FormCadMotoComponent implements OnInit {
  titulo = "Cadastrar Moto";
  moto: Moto;
  codigo: number;

  constructor(private service:MotoService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];
    if (isNaN(this.codigo)) {
      this.moto = new Moto();  
    } else {
      this.moto = Object.assign({}, this.service.getMotoPorCodigo(this.codigo));
    }
  }

  salvarMoto(){
    if (isNaN(this.codigo)) {
      this.service.addMoto(this.moto);
      this.limpar();  
    } else {
      this.service.updateMoto(this.codigo, this.moto);
    }
    this.router.navigate(['/relatorio-motos']);
  }

  limpar(){
    this.moto = new Moto();
  }

}
