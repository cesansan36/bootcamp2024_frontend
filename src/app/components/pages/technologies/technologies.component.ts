import { AfterViewInit, Component, ContentChild, inject } from '@angular/core';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';
import { ModalModel } from 'src/app/models/componentmodels/modal-model';
import { ModalResultModel } from 'src/app/models/componentmodels/modal-result-model';
import { AddTechnologyRequest } from 'src/app/models/datamodels/add-technology-request';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';
import { MODAL_RESULT_INITIAL } from 'src/utils/initialstates/component/modalresult/modal-result-initial';
import { ADD_TECHNOLOGY_INITIAL } from 'src/utils/initialstates/data/addtechnologyrequest/add-technology-initial';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

	addService = inject(CreateServiceService);
	addTechnologyRequest: AddTechnologyRequest = {...ADD_TECHNOLOGY_INITIAL};

	libraryModal: LibraryModal = {
		...LIBRARY_MODAL_INITIAL,
			modal: {...MODAL_INITIAL,
				buttonText: ButtonTextConstants.CREATE,
				title: TextConstants.TECHNOLOGY_LABEL
			}
		};

	updateTechnologyName(value: string) {
		this.addTechnologyRequest = {...this.addTechnologyRequest, name: value};
	}
	updateTechnologyDescription(value: string) {
		this.addTechnologyRequest = {...this.addTechnologyRequest, description: value};
	}

	hideModal() {
		this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModal.isModalResult = false;
	}

	handleModalButtonClick() {
		if (this.libraryModal.modal.buttonText === ButtonTextConstants.CREATE) {
			this.tryAddTechnology();
		}
		else if (this.libraryModal.modal.buttonText === ButtonTextConstants.ACCEPT) {
			this.hideModal();
		}
		else {
			this.libraryModal.isModalResult = false;
			this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		}
	}

	tryAddTechnology() {

		this.addService.createTechnology(this.addTechnologyRequest).subscribe({
			next: () => {
				this.libraryModal.isModalResult = true;
				this.libraryModal.modal.buttonText = ButtonTextConstants.ACCEPT;
				this.libraryModal.modalResult.text = TextConstants.TECHNOLOGY_CREATED_MESSAGE;
				this.libraryModal.modalResult.isSuccess = true;
			},
			error: (error) => {
				let errorMessage = TextConstants.UNDEFINED_ERROR;
				if (error.error && error.error.message) {
					errorMessage = error.error.message;
				}

				this.libraryModal.modal.buttonText = ButtonTextConstants.GO_BACK;
				this.libraryModal.modalResult.text = errorMessage;
				this.libraryModal.modalResult.isSuccess = false;
				this.libraryModal.isModalResult = true;
			}
		});
	}

}
