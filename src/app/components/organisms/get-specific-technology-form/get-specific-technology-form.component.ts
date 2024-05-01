import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-get-specific-technology-form',
	templateUrl: './get-specific-technology-form.component.html',
	styleUrls: ['./get-specific-technology-form.component.scss']
})
export class GetSpecificTechnologyFormComponent {

	http = inject(HttpClient);
	technologyNameInput: string = '';

	updateValue(value: string) {
		this.technologyNameInput = value;
	}

	onValueChangeFromInput() {
		this.http.get('http://localhost:8090/technology/search/' + this.
			technologyNameInput).subscribe(res => console.log(res));
	}
}
