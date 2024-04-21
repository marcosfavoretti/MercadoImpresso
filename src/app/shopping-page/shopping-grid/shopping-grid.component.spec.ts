import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingGridComponent } from './shopping-grid.component';

describe('ShoppingGridComponent', () => {
  let component: ShoppingGridComponent;
  let fixture: ComponentFixture<ShoppingGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingGridComponent]
    });
    fixture = TestBed.createComponent(ShoppingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
