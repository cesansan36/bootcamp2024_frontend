import { inject } from "@angular/core";
import { AddCapabilityRequest } from "src/app/models/datamodels/add-capability-request";
import { TextValuePair } from "src/app/models/text-value-pair";
import { CreateServiceService } from "src/app/services/create-service.service";
import { ADD_CAPABILITY_INITIAL } from "src/utils/initialstates/data/addcapabilityrequest/add-capability-initial";
import { TextConstants } from "src/utils/text-constats";
import { LibraryModalUser } from "../librarymodaluser/library-modal-user";

export class CapabilityRecorder {

	addService = inject(CreateServiceService);

	addCapabilityRequest: AddCapabilityRequest = { ...ADD_CAPABILITY_INITIAL };

	updateCapabilityName(value: string) {
		this.addCapabilityRequest = { ...this.addCapabilityRequest, name: value };
	}
	updateCapabilityTechnologies(values: TextValuePair[]) {
		this.addCapabilityRequest = { ...this.addCapabilityRequest, technologiesNames: values.map(x => x.value) };
	}
	tryAddCapability(modal: LibraryModalUser) {
		this.addService.createCapability(this.addCapabilityRequest).subscribe({
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
