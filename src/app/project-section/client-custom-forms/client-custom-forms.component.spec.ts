import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCustomFormsComponent } from './client-custom-forms.component';

describe('ClientCustomFormsComponent', () => {
  let component: ClientCustomFormsComponent;
  let fixture: ComponentFixture<ClientCustomFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientCustomFormsComponent]
    });
    fixture = TestBed.createComponent(ClientCustomFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
