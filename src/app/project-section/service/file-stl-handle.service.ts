import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStlHandleService {

  constructor() { }

  currentFile: any
  colorofFile!: string
  private fileSubmited: EventEmitter<any> = new EventEmitter()
  private fileChangeColor: EventEmitter<any> = new EventEmitter()

  setCurrentFile(file: any) {
    this.currentFile = file
    this.emitEvent(this.fileSubmited, this.currentFile)
  }
  setCurrentColor(color: any) {
    console.log(color)
    this.colorofFile = color
    this.emitEvent(this.fileChangeColor, color)
  }

  getCurrentFile() {
    return this.currentFile
  }

  makeSubscription(): EventEmitter<any> {
    return this.fileSubmited
  }
  makeColorSubscription(): EventEmitter<any> {
    return this.fileChangeColor
  }



  private emitEvent(evet: EventEmitter<any>, value: any) {
    evet.emit(value)
  }



}
