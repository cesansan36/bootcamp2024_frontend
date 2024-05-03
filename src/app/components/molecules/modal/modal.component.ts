import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
	@Input() size: string = "wide";
	@Input() title: string = "No set title";
	@Input() buttonText: string = "No set name";
	@Input() isModalVisible: boolean = false;

	@Output() closeClicked = new EventEmitter<void>();
	@Output() formButtonClicked = new EventEmitter<void>();

	hideModal() {
		this.closeClicked.emit();
	}

	onFormButtonClicked() {
		this.formButtonClicked.emit();
	}
}
