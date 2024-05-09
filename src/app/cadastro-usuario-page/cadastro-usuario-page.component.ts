import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NovoUsuario } from './Objects/novoUsuario';
import { axiosClient } from 'src/axios.client';

@Component({
  selector: 'app-cadastro-usuario-page',
  templateUrl: './cadastro-usuario-page.component.html',
  styleUrls: ['./cadastro-usuario-page.component.css']
})
export class CadastroUsuarioPageComponent {

  async onSubmit(formulario: NgForm) {
    if(!formulario.valid){
      console.log('formulario nao é valido')
      return
    }
    await this.createUser({
      senha: formulario.controls['senha'].value,
      nome: formulario.controls['usuario'].value,
      email:  formulario.controls['email'].value,
      endereco:{
        bairro: formulario.controls['bairro'].value,
        numero: formulario.controls['numero'].value,
        rua: formulario.controls['rua'].value
      },
    })
  }

  async createUser(novoUsuario: NovoUsuario){
    await axiosClient.post('/usuario/create',{
      ...novoUsuario
    }).then(()=>console.log('criado'))
  }
}
