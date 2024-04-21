import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLogin(){
    console.log('check login Service')
    
  }

}
