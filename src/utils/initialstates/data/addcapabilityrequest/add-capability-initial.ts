import { AddCapabilityRequest } from "src/app/models/datamodels/add-capability-request";
import { TextConstants } from "src/utils/text-constats";

export const ADD_CAPABILITY_INITIAL : AddCapabilityRequest = {
	name: "",
	description: TextConstants.CAPABILITY_UNIMPLEMENTED_DESCRIPTION_MESSAGE,
	technologiesNames: []
}
