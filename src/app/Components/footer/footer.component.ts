import { Component } from '@angular/core';
import { navBarItens, navbarTopics } from '../navbar/navbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  topics: navBarItens[] = navbarTopics
}
