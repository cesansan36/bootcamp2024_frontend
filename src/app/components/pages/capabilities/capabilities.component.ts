import { Component, inject } from '@angular/core';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';
import { AddCapabilityRequest } from 'src/app/models/datamodels/add-capability-request';
import { TechnologyInCapabiliyResponse } from 'src/app/models/datamodels/technology-in-capability-response';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ReadService } from 'src/app/services/read/read.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';
import { ADD_CAPABILITY_INITIAL } from 'src/utils/initialstates/data/addcapabilityrequest/add-capability-initial';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-capabilities',
	templateUrl: './capabilities.component.html',
	styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {

	addService = inject(CreateServiceService);
	readService = inject(ReadService);

	options: TextValuePair[] = [];

	ngOnInit() {
		this.readService.readTechnologyListComplete().subscribe(
			{
				next: (x : TechnologyInCapabiliyResponse[]) => {
					this.options = x.map(y => ({
						text: y.name,
						value: y.name
					}))
				},
				error: () => {
					// console.log(TextConstants.UNDEFINED_ERROR);
					this.options = [{
						text: TextConstants.UNDEFINED_ERROR,
						value: TextConstants.UNDEFINED_ERROR
					}]
				}
			}
		);
	}
	addCapabilityRequest: AddCapabilityRequest = { ...ADD_CAPABILITY_INITIAL };

	libraryModal: LibraryModal = {
		...LIBRARY_MODAL_INITIAL,
			modal: {
				...MODAL_INITIAL,
					buttonText: ButtonTextConstants.CREATE,
					title: TextConstants.CAPABILITY_LABEL
			}
	};

	updateCapabilityName(value: string) {
		this.addCapabilityRequest = { ...this.addCapabilityRequest, name: value };
	}
	updateCapabilityTechnologies(values: TextValuePair[]) {
		this.addCapabilityRequest = { ...this.addCapabilityRequest, technologiesNames: values.map(x => x.value) };
	}

	hideModal() {
		this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModal.isModalResult = false;
	}

	handleModalButtonClick() {
		if (this.libraryModal.modal.buttonText === ButtonTextConstants.CREATE) {
			this.tryAddCapability();
		}
		else if (this.libraryModal.modal.buttonText === ButtonTextConstants.ACCEPT) {
			this.hideModal();
		}
		else {
			this.libraryModal.isModalResult = false;
			this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		}
	}

	tryAddCapability() {
		// TODO: this code looks similar to the one in technologies, maybe we can abstract it
		this.addService.createCapability(this.addCapabilityRequest).subscribe({
			next: () => {
				this.libraryModal.isModalResult = true;
				this.libraryModal.modal.buttonText = ButtonTextConstants.ACCEPT;
				this.libraryModal.modalResult.text = TextConstants.CAPABILITY_CREATED_MESSAGE;
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
