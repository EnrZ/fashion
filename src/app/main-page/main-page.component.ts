import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {

  closeResult: string;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content) {
		this.modalService.open(content, { size: 'sm' });
	}

	openLg(content) {
		this.modalService.open(content, { size: 'lg' });
	}

	openXl(content) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent) {
		this.modalService.open(longContent, { scrollable: true });
	}

	openModalDialogCustomClass(content) {
		this.modalService.open(content, { modalDialogClass: 'dark-modal' });
	}
}
