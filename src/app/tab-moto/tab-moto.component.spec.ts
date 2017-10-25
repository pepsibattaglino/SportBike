/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabMotoComponent } from './tab-moto.component';

describe('TabMotoComponent', () => {
  let component: TabMotoComponent;
  let fixture: ComponentFixture<TabMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
