import { Component, EventEmitter, Output } from '@angular/core';
import { TechnologyFormTexts } from 'src/app/models/componentmodels/technology-form';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-add-technology-form',
	templateUrl: './add-technology-form.component.html',
	styleUrls: ['./add-technology-form.component.scss']
})
export class AddTechnologyFormComponent {

	technologyformTexts: TechnologyFormTexts = {
		nameLabel: TextConstants.LABEL_NAME,
		namePlaceholder: TextConstants.GENERIC_PLACEHOLDER_TEXT,
		descriptionLabel: TextConstants.LABEL_DESCRIPTION,
		descriptionPlaceholder: TextConstants.GENERIC_PLACEHOLDER_TEXT
	}

	@Output() technologyNameChanged = new EventEmitter<string>();
	@Output() technologyDescriptionChanged = new EventEmitter<string>();

	onUpdateTechnologyName(value: string) {
		this.technologyNameChanged.emit(value);
	}
	onUpdateTechnologyDescription(value: string) {
		this.technologyDescriptionChanged.emit(value);
	}
}
