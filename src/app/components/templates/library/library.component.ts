import { Component, inject } from '@angular/core';
import { AddTechnologyRequest } from 'src/app/models/add-technology-request';
import { DropdownOption } from 'src/app/models/dropdownOption';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
	addService = inject(CreateServiceService);
	isModalVisible = false;
	isModalResult = false;
	buttonText: string = ButtonTextConstants.CREATE;
	formData: AddTechnologyRequest = { name: '', description: '' }
	options: DropdownOption[] = [
		{
			label: 'Tecnologías',
			value: 'technologies'
		},
		{
			label: 'Capacidades',
			value: 'capabilities'
		}

	];
	showModal() {
		this.isModalVisible = true;
	}
	hideModal() {
		this.isModalVisible = false;
	}

	updateFormData(formData: AddTechnologyRequest) {
		this.formData = formData;
	}

	tryAddTechnology() {
		// this.addService.createTechnology(this.formData).subscribe(
		// 	(result) => {
		// 		console.log(result.isSuccess);
		// 		console.log(result.message);
		// 	}
		// );

		this.addService.createTechnology(this.formData).subscribe ({
			next: () => {console.log("Celebremos")},
			error: (error) => {
				let errorMessage = "UndefinedError";
				if (error.error && error.error.message) {
					errorMessage = error.error.message;
				}console.log(errorMessage);
			}
		});
	}
	// tryAddTechnology() {
	// 	let result = this.addService.createTechnology(this.formData);
	// 	if (result) {
	// 		console.log("Celebremos");
	// 	}
	// 	else {
	// 		console.log("No celebremos");
	// 	}
	// }
}
