import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSellerComponent } from './tela-seller.component';

describe('TelaSellerComponent', () => {
  let component: TelaSellerComponent;
  let fixture: ComponentFixture<TelaSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
