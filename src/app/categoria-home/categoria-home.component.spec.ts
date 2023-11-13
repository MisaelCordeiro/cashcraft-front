import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaHomeComponent } from './categoria-home.component';

describe('CategoriaHomeComponent', () => {
  let component: CategoriaHomeComponent;
  let fixture: ComponentFixture<CategoriaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
