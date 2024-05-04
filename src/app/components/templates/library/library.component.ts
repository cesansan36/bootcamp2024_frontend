import { Component, inject } from '@angular/core';
import { AddTechnologyRequest } from 'src/app/models/add-technology-request';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { InitialStates } from 'src/utils/initial-states';
import { TextConstants } from 'src/utils/text-constats';
import { ToDoConstants } from 'src/utils/todo.text';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
	addService = inject(CreateServiceService);
	isModalVisible = false;
	isModalResult = false;
	isSuccessResult : boolean = false;
	buttonText: string = ButtonTextConstants.CREATE;
	resultText = ToDoConstants.TODO;
	formData: AddTechnologyRequest = InitialStates.ADD_TECHNOLOGY_REQUEST
	// options: DropdownOption[] = [
	// 	{
	// 		label: 'Tecnologías',
	// 		value: 'technologies'
	// 	},
	// 	{
	// 		label: 'Capacidades',
	// 		value: 'capabilities'
	// 	}

	// ];
	showModal() {
		this.isModalVisible = true;
	}
	hideModal() {
		this.isModalVisible = false;
		this.isModalResult = false;
		this.buttonText = ButtonTextConstants.CREATE;
	}

	updateFormData(formData: AddTechnologyRequest) {
		this.formData = formData;
	}

	handleModalButtonClick() {
		if (this.buttonText === ButtonTextConstants.CREATE) {
			this.tryAddTechnology();
		}
		else if (this.buttonText === ButtonTextConstants.ACCEPT) {
			this.formData = InitialStates.ADD_TECHNOLOGY_REQUEST;
			this.hideModal();
		}
		else {
			this.isModalResult = false;
			this.buttonText = ButtonTextConstants.CREATE;
		}
	}

	tryAddTechnology() {

		this.addService.createTechnology(this.formData).subscribe({
			next: () => {
				this.resultText = TextConstants.TECHNOLOGY_CREATED_MESSAGE;
				console.log(TextConstants.TECHNOLOGY_CREATED_MESSAGE)
				this.isModalResult = true;
				this.buttonText = ButtonTextConstants.ACCEPT;
				this.isSuccessResult = true;
			},
			error: (error) => {
				this.isModalResult = true;
				this.buttonText = ButtonTextConstants.GO_BACK;
				this.isSuccessResult = false;

				let errorMessage = TextConstants.UNDEFINED_ERROR;
				if (error.error && error.error.message) {
					errorMessage = error.error.message;
				}

				this.resultText = errorMessage;
			}
		});
	}
}
