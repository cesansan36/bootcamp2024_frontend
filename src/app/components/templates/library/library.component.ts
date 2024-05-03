import { Component } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdownOption';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
	isModalVisible = false;
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
		console.log(this.isModalVisible);
	}
	hideModal() {
		this.isModalVisible = false;
		console.log(this.isModalVisible);
	}
}
