import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../Services/loginService/login.service';
import { UserInfo } from '../../Services/loginService/Object/User';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent implements OnInit {
  usuario!: UserInfo
  constructor(private loginService: LoginService) { }
  openSideBar: boolean = false
  
  async ngOnInit() {
    this.loginService.usuarioInfoevent.subscribe(
      (data)=> this.usuario = data
    )
  }
  logout(){
      this.loginService.logout()
  }
  sideBarHandle(){
    this.openSideBar = !this.openSideBar
  }
  getUserName(){
    if(!this.usuario || !this.usuario.nome) return '';
    return this.usuario.nome;
  }
  getUserEmail(){
    if(!this.usuario || !this.usuario.email) return '';
    return this.usuario.email;
  }
}
