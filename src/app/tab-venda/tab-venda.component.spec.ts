/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabVendaComponent } from './tab-venda.component';

describe('TabVendaComponent', () => {
  let component: TabVendaComponent;
  let fixture: ComponentFixture<TabVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
