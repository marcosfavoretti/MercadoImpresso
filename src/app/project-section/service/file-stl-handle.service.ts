import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileStlHandleService {

  constructor() { }

  currentFile: any

  setCurrentFile(file: any){
    this.currentFile = file
  }
  getCurrentFile(){
    return this.currentFile
  }

}
