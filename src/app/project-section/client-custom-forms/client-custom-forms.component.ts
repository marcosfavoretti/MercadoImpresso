import { Component } from '@angular/core';
import { colors } from './colors.list';
import { FileStlHandleService } from '../service/file-stl-handle.service';

@Component({
  selector: 'app-client-custom-forms',
  templateUrl: './client-custom-forms.component.html',
  styleUrls: ['./client-custom-forms.component.css']
})
export class ClientCustomFormsComponent {
  colors = colors
  sliderValue: any
  file_name!: string

  constructor(private file_service: FileStlHandleService){
    this.file_name = this.file_service.currentFile?.name
  }


}
