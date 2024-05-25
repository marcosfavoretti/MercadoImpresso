import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileBeforeUploadEvent, FileProgressEvent, FileUploadEvent } from 'primeng/fileupload';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';
import { UploadService } from '../../Services/UploadService/upload-service.service';
import { configfile } from 'src/configfile';
import { ModalWarningComponent } from '../modal-warning/modal-warning.component';

@Component({
  selector: 'app-project-upload-page',
  templateUrl: './project-upload-page.component.html',
  styleUrls: ['./project-upload-page.component.css']
})
export class ProjectUploadPageComponent implements OnInit {
  sever = configfile.sever
  @ViewChild('uploadModal') modal!: ModalUploadComponent;
  @ViewChild('warningModal') modalwarning!: ModalWarningComponent;

  constructor(private router: Router, private upload: UploadService) { }
  progress: number = 0;

  async ngOnInit(): Promise<void> {
    // console.log(localStorage.getItem('project'));
    if (await this.upload.hasProject()) {
      this.goCustom();
    }
  }
  async onErro(){
      this.modal.close()
      this.modalwarning.open()
  }
  async onUpload(event: FileUploadEvent): Promise<void> {
    this.modal.close();
    this.progress = 0;
    this.goCustom()
  }

  onProgress(event: FileProgressEvent): void {
    this.progress = event.progress;
  }

  beforeUpload(event: FileBeforeUploadEvent): void {
    this.modal.open();
  }

  goCustom(): void {
    this.router.navigate(['/project-upload/setup-project']);
  }

  setLocalStorageProject(project: File): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryData = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(binaryData);
        const array = Array.from(byteArray);
        const fileData = {
          name: project.name,
          size: project.size,
          type: project.type,
          lastModified: project.lastModified,
          data: array
        };
        localStorage.setItem('project', JSON.stringify(fileData));
        resolve();
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(project);
    });
  }
}
