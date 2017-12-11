// import { Component, OnInit } from '@angular/core';
// import { Moto } from "../moto";
// import { MotoService } from "../moto.service";
// import { Router, ActivatedRoute } from "@angular/router";

// @Component({
//   selector: 'app-form-cad-moto',
//   templateUrl: './form-cad-moto.component.html',
//   styleUrls: ['./form-cad-moto.component.css']
// })
// export class FormCadMotoComponent implements OnInit {
//   titulo = "Cadastrar Moto";
//   moto: Moto;
//   codigo: number;

//   constructor(private service:MotoService, private router:Router, private rota:ActivatedRoute) { }

//   ngOnInit() {
//     this.codigo = this.rota.snapshot.params['cod'];
//     if (isNaN(this.codigo)) {
//       this.moto = new Moto();  
//     } else {
//       this.moto = Object.assign({}, this.service.getMotoPorCodigo(this.codigo));
//     }
//   }

//   salvarMoto(){
    
//     if (isNaN(this.codigo)) {
//       this.service.addMoto(this.moto).subscribe(
//         data => { this.limpar(); },
//         erro => { console.log(erro); }
//       );
//       this.limpar();  
//     } else {
//       this.service.updateMoto(this.codigo, this.moto);
//     }
//     this.router.navigate(['/relatorio-motos']);
//   }

//   limpar(){
//     this.moto = new Moto();
//   }

// }
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
      this.moto = new Moto();
      this.service.getMotoPorCodigo(this.codigo).subscribe(moto => { this.moto = moto;});
    }
  }
  
  salvarMoto(){
    if (isNaN(this.codigo)) {
      this.service.addMoto(this.moto).subscribe(
        data => { 
          this.limpar(); 
          this.router.navigate(['/relatorio-motos']); 
        },
        erro => { console.log(erro); }
      );
      this.limpar();  
    } else {
      this.service.updateMoto(this.codigo, this.moto).subscribe(
        data => {
          this.limpar();
          this.router.navigate(['/relatorio-motos']); 
        },
        erro => { console.log(erro); }
      );
    }
    // this.router.navigate(['/relatorio-motos']);
  }

  limpar(){
    this.moto = new Moto();
  }

}