import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private stlLoad : any = ""
  private project: any
  constructor() { }
  setProject(project: any){
    this.project = project
  }
  hasProject(){
    return !!(this.project) || !!(localStorage.getItem("project"))
  }
}
