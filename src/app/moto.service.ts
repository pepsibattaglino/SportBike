// =================== versão final ===========================
import { Injectable } from '@angular/core';
import { Moto } from './moto';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";

@Injectable()
export class MotoService {

  // autoincrement = 4;//porque já tem 3 no array
  motos: Moto[] = [];
  uri = "http://localhost:8080/motos";
  
  constructor(private http: Http) { 
  }
  
  addMoto(moto:Moto):Observable<Moto>{
    let bodyString = JSON.stringify(moto);
    let cabecalho = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:cabecalho});
    return this.http.post(this.uri+"/create", bodyString, options)
      .map((res:Response) => {})
      .catch((erro:any) => Observable.throw(erro));
  }

  getMotos():Observable<Moto[]>{
    let uriGet = this.uri +"/all";
    return this.http.get(uriGet)
    .map((res:Response)=>res.json())
    .catch((erro:any) => Observable.throw(erro));
  }

  getMotoPorCodigo(codigo: number): Observable<Moto> {
    let uriGetCod = this.uri +"/find/"+codigo;
    console.log("######################", uriGetCod);
    return this.http.get(uriGetCod)
    .map((res: Response)=> res.json())
    .catch((erro:any)=>Observable.throw(erro));
  }

  updateMoto(codigo: number, moto: Moto): Observable<Moto> {
    // let indice = this.motos.indexOf(this.getMotoPorCodigo(codigo), 0);
    // this.motos[indice] = moto;
    let uriUp = this.uri +"/update/"+codigo;
    return this.http.put(uriUp, moto)
      .map((res:Response)=> {})
      .catch((erro:any)=>Observable.throw(erro))
  }

  removeMotos(moto: Moto): Observable<Moto>{
    let uriDel = this.uri +"/delete/"+moto.codigo;
    console.log("***********************", uriDel)
    return this.http.delete(uriDel)
    .map((res:Response)=>res.json())
    .catch((erro:any) => Observable.throw(erro));
    // .map((res:Response)=> {})
    // .catch((erro:any)=>Observable.throw(erro))
  }


}



// =================== versão 1 ===========================
// import { Injectable } from '@angular/core';
// import { Moto } from './moto';

// @Injectable()
// export class MotoService {

//   autoincrement = 4;//porque já tem 3 no array
//   motos: Moto[] = [
//     {
//       codigo: 1,
//       modelo: "CBR 500R",
//       marca: "Honda",
//       cilindradas: 500,
//       preco: 24000
//     },
//     {
//       codigo: 2,
//       modelo: "R3",
//       marca: "Yamaha",
//       cilindradas: 300,
//       preco: 18000
//     },
//     {
//       codigo: 3,
//       modelo: "FZ6",
//       marca: "Yamaha",
//       cilindradas: 600,
//       preco: 32000
//     }
//   ];

//   constructor() { }

//   addMoto(moto){
//     moto.codigo = this.autoincrement++;
//     this.motos.push(moto);
//   }

//   getMotos(){
//     return this.motos;
//   }

//   removeMotos(moto: Moto){
//     let indice = this.motos.indexOf(moto, 0);
//     if (indice > -1) {
//       this.motos.splice(indice, 1);
//     }
//   }

//   getMotoPorCodigo(codigo: number){
//     return (this.motos.find(moto => moto.codigo == codigo));
//   }

//   updateMoto(codigo: number, moto: Moto){
//     let indice = this.motos.indexOf(this.getMotoPorCodigo(codigo), 0);
//     this.motos[indice] = moto;
//   }

// }



// =================== versão 2(corrigida pelo professor) ===========================
// import { Injectable } from '@angular/core';
// import { Moto } from './moto';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { Observable } from "rxjs/RX";

// @Injectable()
// export class MotoService {

//   // autoincrement = 4;//porque já tem 3 no array
//   motos: Moto[] = [];
//   uri = "http://localhost:8080/motos";
  
//   constructor(private http: Http) { 
//   }
  
//   addMoto(moto:Moto):Observable<Moto>{
//     let bodyString = JSON.stringify(moto);
//     let cabecalho = new Headers({'Content-Type':'application/json'});
//     let options = new RequestOptions({headers:cabecalho});
//     return this.http.post(this.uri, bodyString, options)
//       .map((res:Response) => {})
//       .catch((erro:any) => Observable.throw(erro));

//   }

//   getMotos():Observable<Moto[]>{
//     let uriGet = this.uri +"/all";
//     return this.http.get(uriGet)
//     .map((res:Response)=>res.json())
//     .catch((erro:any) => Observable.throw(erro));
//   }

//   removeMotos(moto: Moto){
//     let indice = this.motos.indexOf(moto, 0);
//     if (indice > -1) {
//       this.motos.splice(indice, 1);
//     }
//   }

//   getMotoPorCodigo(codigo: number){
//     return (this.motos.find(moto => moto.codigo == codigo));
//   }

//   updateMoto(codigo: number, moto: Moto){
//     let indice = this.motos.indexOf(this.getMotoPorCodigo(codigo), 0);
//     this.motos[indice] = moto;
//   }

// }



// =================== versão teste ===========================
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