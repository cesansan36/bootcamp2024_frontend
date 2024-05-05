import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BootcampFormTexts } from 'src/app/models/componentmodels/bootcamp-form';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-add-bootcamp-form',
	templateUrl: './add-bootcamp-form.component.html',
	styleUrls: ['./add-bootcamp-form.component.scss']
})
export class AddBootcampFormComponent {

	bootcampFormTexts : BootcampFormTexts = {
		nameLabel: TextConstants.LABEL_NAME,
		namePlaceholder: TextConstants.GENERIC_PLACEHOLDER_TEXT,
		descriptionLabel: TextConstants.LABEL_DESCRIPTION,
		descriptionPlaceholder: TextConstants.GENERIC_PLACEHOLDER_TEXT,
		capabilitiesLabel: TextConstants.LABEL_CAPABILITY_LIST
	}

	@Input() options: TextValuePair[] = [];

	@Output() bootcampNameChanged = new EventEmitter<string>();
	@Output() bootcampDescriptionChanged = new EventEmitter<string>();
	@Output() bootcampCapabilitiesChanged = new EventEmitter<TextValuePair[]>();

	onUpdateBootcampName(value: string) {
		this.bootcampNameChanged.emit(value);
	}
	onUpdateBootcampDescription(value: string) {
		this.bootcampDescriptionChanged.emit(value);
	}
	onUpdateBootcampCapabilities(values: TextValuePair[]) {
		this.bootcampCapabilitiesChanged.emit(values);
	}
}
