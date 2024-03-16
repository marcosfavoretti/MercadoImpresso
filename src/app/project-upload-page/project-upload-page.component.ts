import { Component } from '@angular/core';

@Component({
  selector: 'app-project-upload-page',
  templateUrl: './project-upload-page.component.html',
  styleUrls: ['./project-upload-page.component.css']
})
export class ProjectUploadPageComponent {
  onBasicUploadAuto(event:any){
    console.log(event)
  }
}
