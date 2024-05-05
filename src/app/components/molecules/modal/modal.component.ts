import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalModel } from 'src/app/models/componentmodels/modal-model';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
	@Input() modalModel: ModalModel = {...MODAL_INITIAL};

	@Output() closeClicked = new EventEmitter<void>();
	@Output() formButtonClicked = new EventEmitter<void>();

	hideModal() {
		this.closeClicked.emit();
	}

	onFormButtonClicked() {
		this.formButtonClicked.emit();
	}
}
