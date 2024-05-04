import { Component } from '@angular/core';
import { AddCapabilityRequest } from 'src/app/models/add-capability-request';
import { TextValuePair } from 'src/app/models/text-value-pair';

@Component({
	selector: 'app-add-capability-form',
	templateUrl: './add-capability-form.component.html',
	styleUrls: ['./add-capability-form.component.scss']
})
export class AddCapabilityFormComponent {

	capabilityData: AddCapabilityRequest = {
		name: '',
		description: 'Description not set',  // TODO: clarify field used in backend not present in front end design
		technologies: []
	};

	onUpdateCapabilityName(value: string) {
		this.capabilityData.name = value;
	}
	onUpdateCapabilityTechnologies(values: TextValuePair[]) {
		this.capabilityData.technologies = values.map(x => x.value);
	}
}
