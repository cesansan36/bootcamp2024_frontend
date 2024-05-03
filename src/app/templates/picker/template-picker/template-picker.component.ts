import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-template-picker',
	templateUrl: './template-picker.component.html',
	styleUrls: ['./template-picker.component.scss']
})
export class TemplatePickerComponent {

	isHomeRoute: boolean = true;

	constructor(private location: Location) {

	}
	ngOnInit() {
		console.log(this.location.path());
		this.isHomeRoute = this.location.path().includes('home');
	}
}
