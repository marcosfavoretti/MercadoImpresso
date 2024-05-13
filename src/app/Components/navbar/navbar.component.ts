import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { navbarTopics } from './navbar';
import { LoginService } from '../../Services/loginService/login.service';
import { UserInfo } from '../../Services/loginService/Object/User';
import { BadgeDirective } from 'primeng/badge';
import { Router } from '@angular/router';
import { SideBarComponent } from '../sideBar/sideBar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  usuario?: UserInfo
  status: BadgeDirective['severity']
  sideBarStt: boolean = false
  topics = navbarTopics
  @ViewChild('sideBar') sideBar !: SideBarComponent
  ngOnInit(): void {
    this.usuario = this.loginService.usuarioInfo
    this.loginService.usuarioInfoevent.subscribe(userInfo => {
      this.usuario = userInfo
    })
    this.isLog()
  }

  isLog():BadgeDirective['severity']{
    if(!!this.usuario) return 'success'
    else return 'danger'
  }
  
  openUserInfos(){
    // if(!!this.usuario) this.router.navigate(['/home'])
  }

  openSideBar() {
    this.sideBar.sideBarHandle()
  }

}
