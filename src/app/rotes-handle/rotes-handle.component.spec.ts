import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotesHandleComponent } from './rotes-handle.component';

describe('RotesHandleComponent', () => {
  let component: RotesHandleComponent;
  let fixture: ComponentFixture<RotesHandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotesHandleComponent]
    });
    fixture = TestBed.createComponent(RotesHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
