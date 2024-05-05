import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AddTechnologyRequest } from 'src/app/models/datamodels/add-technology-request';
import { ModalModel } from 'src/app/models/componentmodels/modal-model';
import { ModalResultModel } from 'src/app/models/componentmodels/modal-result-model';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';
import { MODAL_RESULT_INITIAL } from 'src/utils/initialstates/component/modalresult/modal-result-initial';
import { ADD_TECHNOLOGY_INITIAL } from 'src/utils/initialstates/data/addtechnologyrequest/add-technology-initial';
import { TextConstants } from 'src/utils/text-constats';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
	addService = inject(CreateServiceService);

	@Input() libraryModal: LibraryModal = {...LIBRARY_MODAL_INITIAL};
	@Output() libraryModalChange = new EventEmitter<LibraryModal>();

	showModal() {
		this.libraryModal.modal.isModalVisible = true;
		this.libraryModalChange.emit(this.libraryModal);
	}
	hideModal() {
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModalChange.emit(this.libraryModal);
	}

	@Output() formButtonClicked = new EventEmitter();

	handleModalButtonClick() {
		this.formButtonClicked.emit();
	}
}
