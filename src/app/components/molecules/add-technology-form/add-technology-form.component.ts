import { Component, EventEmitter, Output } from '@angular/core';
import { AddTechnologyRequest } from 'src/app/models/add-technology-request';

@Component({
  selector: 'app-add-technology-form',
  templateUrl: './add-technology-form.component.html',
  styleUrls: ['./add-technology-form.component.scss']
})
export class AddTechnologyFormComponent {

	technologyData: AddTechnologyRequest = {
		name: '',
		description: ''
	};

	@Output() addTechnologyData = new EventEmitter<AddTechnologyRequest>();

	onUpdateTechnologyName(value: string) {
		this.technologyData.name = value;
		this.addTechnologyData.emit(this.technologyData);
	}
	onUpdateTechnologyDescription(value: string) {
		this.technologyData.description = value;
		this.addTechnologyData.emit(this.technologyData);
	}
}
