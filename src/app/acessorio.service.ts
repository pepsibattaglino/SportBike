import { Injectable } from '@angular/core';
import { Acessorio } from './acessorio';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";

@Injectable()
export class AcessorioService {

  acessorios: Acessorio[] = [];
  uri = "http://localhost:8080/acessorios";
  
  constructor(private http: Http) { 
  }
  
  addAcessorio(acessorio : Acessorio):Observable<Acessorio>{
    let bodyString = JSON.stringify(acessorio);
    let cabecalho = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:cabecalho});
    return this.http.post(this.uri + "/create", bodyString, options)
      .map((res:Response) => {})
      .catch((erro:any) => Observable.throw(erro));
  }

  getAcessorios():Observable<Acessorio[]>{
    let uriGet = this.uri + "/all";
    console.log(uriGet);
    return this.http.get(uriGet)
      .map((res:Response)=>res.json())
      .catch((erro:any) => Observable.throw(erro));
  }

  getAcessorioPorCodigo(codigo: number): Observable<Acessorio> {
    let uriGetCod = this.uri + "/find/" + codigo;
    console.log(uriGetCod);
    return this.http.get(uriGetCod)
      .map((res: Response)=> res.json())
      .catch((erro:any)=>Observable.throw(erro));
  }

  updateAcessorio(codigo: number, acessorio: Acessorio): Observable<Acessorio> {
    let uriUp = this.uri + "/update/" + codigo;
    console.log(uriUp);
    return this.http.put(uriUp, acessorio)
      .map((res:Response)=> {})
      .catch((erro:any)=>Observable.throw(erro))
  }

  removeAcessorios(acessorio: Acessorio): Observable<Acessorio>{
    let uriDel = this.uri + "/delete/" + acessorio.codigo;
    console.log(uriDel);
    return this.http.delete(uriDel)
      .map((res:Response)=>res.json())
      .catch((erro:any) => Observable.throw(erro));
  }

}