import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NovoUsuario } from '../../Types/novoUsuario';
import { axiosClient } from 'src/axios.client';
import { ModalWarningComponent } from '../modal-warning/modal-warning.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario-page',
  templateUrl: './cadastro-usuario-page.component.html',
  styleUrls: ['./cadastro-usuario-page.component.css']
})
export class CadastroUsuarioPageComponent {
  @ViewChild('warningModal') modal !: ModalWarningComponent
  erromsg : string = ''
  constructor(private route: Router){

  }
  async onSubmit(formulario: NgForm) {
    if(!formulario.valid){
      this.erromsg = 'Tivemos problemas com o cadastro do usúario. Dados do Formulário inválidos!'
      this.modal.open()
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
    await axiosClient.post('/usuario',{
      ...novoUsuario
    }).then(()=> this.route.navigate(['/home']))
    .catch(()=>{
      this.erromsg = 'Tivemos problemas com o cadastro do usúario. Por favor tente mais tarde!'
      this.modal.open()
    })
  }
}
