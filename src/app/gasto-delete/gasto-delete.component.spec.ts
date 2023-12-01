import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoDeleteComponent } from './gasto-delete.component';

describe('GastoDeleteComponent', () => {
  let component: GastoDeleteComponent;
  let fixture: ComponentFixture<GastoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
