import { AfterViewInit, Component, OnInit } from '@angular/core';
import { navbarTopics } from './navbar';
import { LoginService } from '../Services/loginService/login.service';
import { UserInfo } from '../Services/loginService/Object/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  constructor(private loginService: LoginService) { }

  login_status?: UserInfo

  menuisopen: boolean = false
  topics = navbarTopics

  ngAfterViewInit(): void {
    this.loginService.usuarioInfo.subscribe(userInfo => {
      this.login_status = userInfo
    })
  }
  openMenu() {
    return !this.menuisopen
  }

  isLog(): boolean {
    const status = !!(this.login_status)
    console.log(status)
    return status
  }
}
