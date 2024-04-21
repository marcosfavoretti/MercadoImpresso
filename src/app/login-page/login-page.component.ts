import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { axiosClient } from 'src/axios.client';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  async onSubmit(formulario: NgForm) {
    if(!formulario.valid){
      console.log('formulario nao é valido')
      return
    }
    console.log(formulario)
    console.log(formulario)
    await this.auth({
      senha: formulario.controls['senha'].value,
      usuario: formulario.controls['usuario'].value
    })
  }

  async auth({
    usuario,
    senha
  }:{
    usuario: string,
    senha: string
  }){
   const token = (await axiosClient.post('/usuario/validate',{
      nome: usuario,
      senha: senha
   },{
    withCredentials: true
   })).data
   console.log(token)

  }
}
