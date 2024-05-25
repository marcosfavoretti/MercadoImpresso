import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../Services/loginService/login.service';
import { ModalWarningComponent } from '../modal-warning/modal-warning.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login !: boolean
  @ViewChild('modalwarning') modal !: ModalWarningComponent
  constructor(private loginService: LoginService) { }
  async onSubmit(formulario: NgForm) {
    if (!formulario.valid) {
      return
    }
    await this.loginService.auth({
      senha: formulario.controls['senha'].value,
      usuario: formulario.controls['usuario'].value
    })
    .catch((err)=>
      this.modal.open()
  )
  }
  

}
