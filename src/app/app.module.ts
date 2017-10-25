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

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'motos', component: TabMotoComponent },
  { path: 'vendas', component: TabVendaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormCadMotoComponent,
    FormCadVendaComponent,
    TabMotoComponent,
    TabVendaComponent
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
