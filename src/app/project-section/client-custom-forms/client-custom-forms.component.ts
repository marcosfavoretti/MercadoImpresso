import { Component, OnInit } from '@angular/core';
import { colors } from './colors.list';
import { FileStlHandleService } from '../service/file-stl-handle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-custom-forms',
  templateUrl: './client-custom-forms.component.html',
  styleUrls: ['./client-custom-forms.component.css']
})
export class ClientCustomFormsComponent implements OnInit {
  colors = colors
  sliderValue: any
  file!: any
  sliderLayer: any
  slideInfill: any
  selectColor?: string
  constructor(private file_service: FileStlHandleService, private router: Router) { }

  ngOnInit(): void {
    this.file_service.makeSubscription().subscribe(
      (newValue) => {
        this.file = newValue
      }
    )

  }
  closeProject(){
    localStorage.removeItem('project')
    this.router.navigate(['/project-upload'])
  }
  setNewColor(color: any) {
    this.file_service.setCurrentColor(color)
  }
  getFileName() {
    return this.file?.name ?? ""
  }



}
