import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapabilityFormTexts } from 'src/app/models/componentmodels/capability-form';
import { AddCapabilityRequest } from 'src/app/models/datamodels/add-capability-request';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-add-capability-form',
	templateUrl: './add-capability-form.component.html',
	styleUrls: ['./add-capability-form.component.scss']
})
export class AddCapabilityFormComponent {

	capabilityFormTexts: CapabilityFormTexts = {
		nameLabel: TextConstants.LABEL_NAME,
		namePlaceholder: TextConstants.GENERIC_PLACEHOLDER_TEXT,
		descriptionLabel: TextConstants.LABEL_TECHNOLOGY_LIST
	}

	@Input() options: TextValuePair[] = [];

	@Output() capabilityNameChanged = new EventEmitter<string>();
	@Output() capabilityTechnologiesChanged = new EventEmitter<TextValuePair[]>();

	onUpdateCapabilityName(value: string) {
		this.capabilityNameChanged.emit(value);
	}
	onUpdateCapabilityTechnologies(values: TextValuePair[]) {
		this.capabilityTechnologiesChanged.emit(values);
	}
}
