import { EventEmitter, Injectable } from '@angular/core';
import { axiosClient } from 'src/axios.client';
import { UserInfo } from './Object/User';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { configfile } from 'src/configfile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private cookieService: CookieService) { }
  usuarioInfoevent: EventEmitter<UserInfo> = new EventEmitter<UserInfo>()
  usuarioInfo?: UserInfo
  logout(){
     this.cookieService.delete('token' , '/', configfile.sever)
    this.router.navigate(['home'])
    console.log('logout ainda em processo para fazer logout tire o cookie "token" manualmente')
  }
  async auth({
    usuario,
    senha
  }: {
    usuario: string,
    senha: string
  }) {
    const token = (await axiosClient.post('/usuario/login', {
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
    const userInfo = (await axiosClient.get('/usuario')).data
    return userInfo
  }
}
