import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent {
  constructor(private active: ActivatedRoute) { }
  router: null | string = null
  ngOnInit() {
    console.log(document.cookie)
    this.router = this.active.snapshot.paramMap.get('routes')
    console.log(this.router)
  }
}
