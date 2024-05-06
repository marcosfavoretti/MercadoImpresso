import { EventEmitter, Injectable } from '@angular/core';
import { axiosClient } from 'src/axios.client';
import { UserInfo } from './Object/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  usuarioInfoevent: EventEmitter<UserInfo> = new EventEmitter<UserInfo>()
  usuarioInfo?: UserInfo
  
  async auth({
    usuario,
    senha
  }: {
    usuario: string,
    senha: string
  }) {
    const token = (await axiosClient.post('/usuario/validate', {
      nome: usuario,
      senha: senha
    }, {
      withCredentials: true
    })).data
    if (token){ 
      this.usuarioInfoevent.emit(await this.getUserInfo())
      this.router.navigate(['/home'])
    }
  }

  async checkLogin() {
    try {
      const userInfo = await this.getUserInfo()
      if (!userInfo) throw new Error('Usuaio nõo esta autenticado')
      this.usuarioInfoevent.emit(userInfo)
    }
    catch (err) {
      return
    }

  }

  async getUserInfo() {
    const userInfo = (await axiosClient.get('/usuario/userinfos')).data
    return userInfo
  }
}
