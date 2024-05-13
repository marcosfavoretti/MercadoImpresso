import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeProductsGridComponent } from './some-products-grid.component';

describe('SomeProductsGridComponent', () => {
  let component: SomeProductsGridComponent;
  let fixture: ComponentFixture<SomeProductsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeProductsGridComponent]
    });
    fixture = TestBed.createComponent(SomeProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
