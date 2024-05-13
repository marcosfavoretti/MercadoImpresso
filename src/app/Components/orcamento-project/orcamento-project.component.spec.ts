import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoProjectComponent } from './orcamento-project.component';

describe('OrcamentoProjectComponent', () => {
  let component: OrcamentoProjectComponent;
  let fixture: ComponentFixture<OrcamentoProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoProjectComponent]
    });
    fixture = TestBed.createComponent(OrcamentoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
