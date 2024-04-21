import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { LoginService } from './Services/loginService/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce3dPrinter';
  constructor(private login: LoginService){}
  async ngOnInit() {
    await this.login.checkLogin()
    console.log('check login')
    AOS.init();
    console.log('init aos')
  }
}
