import { Component, inject } from '@angular/core';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';
import { AddBootcampRequest } from 'src/app/models/datamodels/add-bootcamp-request';
import { CapabilityInBootcampResponse } from 'src/app/models/datamodels/capability-in-bootcamp-response';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ReadService } from 'src/app/services/read/read.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';
import { ADD_BOOTCAMP_INITIAL } from 'src/utils/initialstates/data/addbootcamprequest/add-bootcamp-initial';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-bootcamp',
	templateUrl: './bootcamp.component.html',
	styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent {

	addService = inject(CreateServiceService);
	readService = inject(ReadService);

	options: TextValuePair[] = [];

	ngOnInit() {
		this.readService.readCapabilityListComplete().subscribe(
			{
				next: (x: CapabilityInBootcampResponse[]) => {
					this.options = x.map(y => ({
						text: y.name,
						value: y.name
					}))
				},
				error: () => {
					this.options = [{
						text: TextConstants.UNDEFINED_ERROR,
						value: TextConstants.UNDEFINED_ERROR
					}]
				}
			}
		);
	}

	addBootcampRequest: AddBootcampRequest = { ...ADD_BOOTCAMP_INITIAL };

	libraryModal: LibraryModal = {
		...LIBRARY_MODAL_INITIAL,
		modal: {
			...MODAL_INITIAL,
			buttonText: ButtonTextConstants.CREATE,
			title: TextConstants.BOOTCAMP_LABEL
		}
	};

	updateBootcampName(value: string) {
		this.addBootcampRequest = { ...this.addBootcampRequest, name: value };
	}
	updateBootcampDescription(value: string) {
		this.addBootcampRequest = { ...this.addBootcampRequest, description: value };
	}
	updateBootcampCapabilities(values: TextValuePair[]) {
		this.addBootcampRequest = { ...this.addBootcampRequest, capabilitiesNames: values.map(x => x.value) };
	}

	hideModal() {
		this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModal.isModalResult = false;
	}

	handleModalButtonClick() {
		if (this.libraryModal.modal.buttonText === ButtonTextConstants.CREATE) {
			this.tryAddBootcamp();
		}
		else if (this.libraryModal.modal.buttonText === ButtonTextConstants.ACCEPT) {
			this.hideModal();
		}
		else {
			this.libraryModal.isModalResult = false;
			this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		}
	}

	tryAddBootcamp() {
		this.addService.createBootcamp(this.addBootcampRequest).subscribe({
			next: () => {
				this.libraryModal.isModalResult = true;
				this.libraryModal.modal.buttonText = ButtonTextConstants.ACCEPT;
				this.libraryModal.modalResult.text = TextConstants.BOOTCAMP_CREATED_MESSAGE;
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
