import { inject } from "@angular/core";
import { AddTechnologyRequest } from "src/app/models/datamodels/add-technology-request";
import { CreateServiceService } from "src/app/services/create-service.service";
import { ADD_TECHNOLOGY_INITIAL } from "src/utils/initialstates/data/addtechnologyrequest/add-technology-initial";
import { TextConstants } from "src/utils/text-constats";
import { LibraryModalUser } from "../librarymodaluser/library-modal-user";

export class TechnologyRecorder {

	addService = inject(CreateServiceService);

	addTechnologyRequest: AddTechnologyRequest = { ...ADD_TECHNOLOGY_INITIAL };

	updateTechnologyName(value: string) {
		this.addTechnologyRequest = { ...this.addTechnologyRequest, name: value };
	}
	updateTechnologyDescription(value: string) {
		this.addTechnologyRequest = { ...this.addTechnologyRequest, description: value };
	}

	tryAddTechnology(modal: LibraryModalUser) {
		this.addService.createTechnology(this.addTechnologyRequest).subscribe({
			next: () => {
				modal.setResultMessageSuccess(TextConstants.TECHNOLOGY_CREATED_MESSAGE);
			},
			error: (error) => {
				let errorMessage = TextConstants.UNDEFINED_ERROR;
				if (error.error && error.error.message) {
					errorMessage = error.error.message;
				}
				modal.setResultMessageError(errorMessage);
			}
		});
	}
}
