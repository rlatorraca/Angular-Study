import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldControlErroComponent } from './field-control-erro.component';

describe('FieldControlErroComponent', () => {
  let component: FieldControlErroComponent;
  let fixture: ComponentFixture<FieldControlErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldControlErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldControlErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
