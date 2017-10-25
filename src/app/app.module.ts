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

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'relatorio-motos', component: TabMotoComponent },
  { path: 'relatorio-vendas', component: TabVendaComponent},
  { path: 'cadastro-motos', component: FormCadMotoComponent },
  { path: 'cadastro-vendas', component: FormCadVendaComponent},
  { path: 'edicao-motos/:cod', component: FormCadMotoComponent },
  { path: 'edicao-vendas/:cod', component: FormCadVendaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormCadMotoComponent,
    FormCadVendaComponent,
    TabMotoComponent,
    TabVendaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MotoService, VendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
