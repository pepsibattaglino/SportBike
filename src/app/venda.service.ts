//================================ versão final ====================================
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Venda } from "./venda";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";

@Injectable()
export class VendaService {

  vendas: Venda[]=[];
  uri = "http://localhost:8080/vendas";

  constructor(private http: Http) { }

  addVenda(venda:Venda):Observable<Venda>{
    let bodyString = JSON.stringify(venda);
    console.log(bodyString)
    let cabecalho = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:cabecalho});
    return this.http.post(this.uri + "/create", bodyString, options)
      .map((res:Response) => {})
      .catch((erro:any) => Observable.throw(erro));
  }

  getVendas():Observable<Venda[]>{
    let uriGet = this.uri +"/all";
    console.log(uriGet);
    return this.http.get(uriGet)
      .map((res:Response)=>res.json())
      .catch((erro:any) => Observable.throw(erro));    
  }

  getVendaPorCodigo(codigo: number): Observable<Venda>{
    // return (this.vendas.find(venda => venda.codigo == codigo));
    let uriGetCod = this.uri + "/find/" + codigo;
    console.log(uriGetCod);
    return this.http.get(uriGetCod)
      .map((res: Response)=> res.json())
      .catch((erro:any)=>Observable.throw(erro));
  }

  updateVenda(codigo: number, venda: Venda): Observable<Venda>{
    // let indice = this.vendas.indexOf(this.getVendaPorCodigo(codigo), 0);
    // this.vendas[indice] = venda;
    let uriUp = this.uri + "/update/" + codigo;
    console.log(uriUp);
    return this.http.put(uriUp, venda)
      .map((res:Response)=> {})
      .catch((erro:any)=>Observable.throw(erro))
  }

  removeVenda(venda: Venda): Observable<Venda>{
    // let indice = this.vendas.indexOf(venda, 0);
    // if (indice > -1) {
    //   this.vendas.splice(indice, 1);
    // }
    let uriDel = this.uri + "/delete/" + venda.codigo;
    console.log(uriDel);
    return this.http.delete(uriDel)
      .map((res:Response)=> {})//pode ser igual ao motoService.ts
      .catch((erro:any)=>Observable.throw(erro))
  }

}

//================================ versão 1 ====================================
// import { Injectable } from '@angular/core';
// import { Venda } from "./venda";

// @Injectable()
// export class VendaService {

//   autoincrement = 1;
//   vendas: Venda[]=[];

//   constructor() { }

//   addVenda(venda){
//     venda.codigo = this.autoincrement++;
//     this.vendas.push(venda);
//   }

//   getVendas(){
//     return this.vendas;
//   }

//   removeVenda(venda: Venda){
//     let indice = this.vendas.indexOf(venda, 0);
//     if (indice > -1) {
//       this.vendas.splice(indice, 1);
//     }
//   }

//   getVendaPorCodigo(codigo: number){
//     return (this.vendas.find(venda => venda.codigo == codigo));
//   }

//   updateVenda(codigo: number, venda: Venda){
//     let indice = this.vendas.indexOf(this.getVendaPorCodigo(codigo), 0);
//     this.vendas[indice] = venda;
//   }

// }

//================================ versão teste ====================================
// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Motor } from "./motor";

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { Observable } from "rxjs/RX";

// @Injectable()
// export class MotorService {
//   motores: Motor[] = [];
//   uri = "http://localhost:8080/CadastroMotores/api/motores";

//   constructor(private http: Http) { 
//   }

//   getMotores():Observable<Motor[]>{
//     return this.http.get(this.uri)
//       .map((res:Response)=>res.json())
//       .catch((erro:any) => Observable.throw(erro));
      
//   }

//   adicionarMotor(motor:Motor):Observable<Motor>{
//     let bodyString = JSON.stringify(motor);
//     let cabecalho = new Headers({'Content-Type':'application/json'});
//     let options = new RequestOptions({headers:cabecalho});
//     return this.http.post(this.uri, bodyString, options)
//       .map((res:Response) => {})
//       .catch((erro:any) => Observable.throw(erro));

//   }

// }