import { inject } from "@angular/core";
import { AddBootcampRequest } from "src/app/models/datamodels/add-bootcamp-request";
import { TextValuePair } from "src/app/models/text-value-pair";
import { CreateServiceService } from "src/app/services/create-service.service";
import { ADD_BOOTCAMP_INITIAL } from "src/utils/initialstates/data/addbootcamprequest/add-bootcamp-initial";
import { TextConstants } from "src/utils/text-constats";
import { LibraryModalUser } from "../librarymodaluser/library-modal-user";

export class BootcampRecorder {

	addService = inject(CreateServiceService);

	addBootcampRequest: AddBootcampRequest = { ...ADD_BOOTCAMP_INITIAL };

	updateBootcampName(value: string) {
		this.addBootcampRequest = { ...this.addBootcampRequest, name: value };
	}
	updateBootcampDescription(value: string) {
		this.addBootcampRequest = { ...this.addBootcampRequest, description: value };
	}
	updateBootcampCapabilities(values: TextValuePair[]) {
		this.addBootcampRequest = { ...this.addBootcampRequest, capabilitiesNames: values.map(x => x.value) };
	}

	tryAddBootcamp(modal: LibraryModalUser) {
		this.addService.createBootcamp(this.addBootcampRequest).subscribe({
			next: () => {
				modal.setResultMessageSuccess(TextConstants.CAPABILITY_CREATED_MESSAGE);
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
