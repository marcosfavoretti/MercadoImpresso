import { Component } from '@angular/core';
import { navbarTopics } from './navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuisopen: boolean = false
  topics = navbarTopics
  openMenu(){
    return !this.menuisopen
  }
}
