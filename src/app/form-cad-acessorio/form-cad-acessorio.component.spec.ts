import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadAcessorioComponent } from './form-cad-acessorio.component';

describe('FormCadAcessorioComponent', () => {
  let component: FormCadAcessorioComponent;
  let fixture: ComponentFixture<FormCadAcessorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadAcessorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
