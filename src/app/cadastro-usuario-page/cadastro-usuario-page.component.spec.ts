import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioPageComponent } from './cadastro-usuario-page.component';

describe('CadastroUsuarioPageComponent', () => {
  let component: CadastroUsuarioPageComponent;
  let fixture: ComponentFixture<CadastroUsuarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroUsuarioPageComponent]
    });
    fixture = TestBed.createComponent(CadastroUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
