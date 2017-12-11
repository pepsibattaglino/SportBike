import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAcessorioComponent } from './tab-acessorio.component';

describe('TabAcessorioComponent', () => {
  let component: TabAcessorioComponent;
  let fixture: ComponentFixture<TabAcessorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAcessorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
