import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPaymentComponent } from './tela-payment.component';

describe('TelaPaymentComponent', () => {
  let component: TelaPaymentComponent;
  let fixture: ComponentFixture<TelaPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
