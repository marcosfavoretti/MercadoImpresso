import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemInfoComponent } from './shopping-item-info.component';

describe('ShoppingItemInfoComponent', () => {
  let component: ShoppingItemInfoComponent;
  let fixture: ComponentFixture<ShoppingItemInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingItemInfoComponent]
    });
    fixture = TestBed.createComponent(ShoppingItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
