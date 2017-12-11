import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormCadMotoComponent } from './form-cad-moto/form-cad-moto.component';
import { FormCadVendaComponent } from './form-cad-venda/form-cad-venda.component';
import { TabMotoComponent } from './tab-moto/tab-moto.component';
import { TabVendaComponent } from './tab-venda/tab-venda.component';
import { MotoService } from './moto.service';
import { VendaService } from './venda.service';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCadAcessorioComponent } from './form-cad-acessorio/form-cad-acessorio.component';
import { TabAcessorioComponent } from './tab-acessorio/tab-acessorio.component';
import { AcessorioService } from 'app/acessorio.service';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'relatorio-motos', component: TabMotoComponent },
  { path: 'relatorio-acessorios', component: TabAcessorioComponent },
  { path: 'relatorio-vendas', component: TabVendaComponent},
  { path: 'cadastro-motos', component: FormCadMotoComponent },
  { path: 'cadastro-acessorios', component: FormCadAcessorioComponent },
  { path: 'cadastro-vendas', component: FormCadVendaComponent},
  { path: 'edicao-motos/:cod', component: FormCadMotoComponent },
  { path: 'edicao-acessorios/:cod', component: FormCadAcessorioComponent },
  { path: 'edicao-vendas/:cod', component: FormCadVendaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormCadMotoComponent,
    FormCadVendaComponent,
    FormCadAcessorioComponent,
    TabMotoComponent,
    TabVendaComponent,
    TabAcessorioComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MotoService, VendaService, AcessorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
