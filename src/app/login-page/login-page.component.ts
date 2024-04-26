import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { axiosClient } from 'src/axios.client';
import { LoginService } from '../Services/loginService/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login !: boolean
  constructor(private loginService: LoginService) { }
  async onSubmit(formulario: NgForm) {
    if (!formulario.valid) {
      console.log('formulario nao é valido')
      return
    }
    console.log(formulario)
    console.log(formulario)
    await this.loginService.auth({
      senha: formulario.controls['senha'].value,
      usuario: formulario.controls['usuario'].value
    })
  }
  

}
