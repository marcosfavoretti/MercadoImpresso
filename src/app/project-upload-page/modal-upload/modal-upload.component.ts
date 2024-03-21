import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent {
  constructor(private modalService:NgbModal){}
  closeResult= ""
  @ViewChild('content') modal !: ElementRef
  @Input() progress: number = 0

	open() {
		this.modalService.open(this.modal, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  close(){
    this.modalService.dismissAll()
  }

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

}
