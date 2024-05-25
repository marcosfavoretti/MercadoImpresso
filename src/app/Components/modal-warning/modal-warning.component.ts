import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal-warning',
  templateUrl: './modal-warning.component.html',
  styleUrls: ['./modal-warning.component.css']
})
export class ModalWarningComponent implements OnInit {
  @Input('header') header !: string
  @Input('status') status: boolean = false
  constructor() { }
  @Input('body') body!: string
  
  ngOnInit() {
  }
  open() {
		this.status = true
	}

  close(){
    this.status = false
  }
}
