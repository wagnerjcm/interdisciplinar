import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConfirmedComponent } from './tela-confirmed.component';

describe('TelaConfirmedComponent', () => {
  let component: TelaConfirmedComponent;
  let fixture: ComponentFixture<TelaConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
