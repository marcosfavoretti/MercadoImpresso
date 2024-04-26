import { EventEmitter, Injectable } from '@angular/core';
import { axiosClient } from 'src/axios.client';
import { UserInfo } from './Object/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  usuarioInfo: EventEmitter<UserInfo> = new EventEmitter<UserInfo>()

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
    if (token) this.usuarioInfo.emit(await this.getUserInfo())
  }

  async checkLogin() {
    console.log('check login')
    try {
      const userInfo = await this.getUserInfo()
      if (!userInfo) throw new Error('Usuaio nõo esta autenticado')
      this.usuarioInfo.emit(userInfo)
      console.log('logado')
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
