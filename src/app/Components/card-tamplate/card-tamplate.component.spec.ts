import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTamplateComponent } from './card-tamplate.component';

describe('CardTamplateComponent', () => {
  let component: CardTamplateComponent;
  let fixture: ComponentFixture<CardTamplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTamplateComponent]
    });
    fixture = TestBed.createComponent(CardTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
