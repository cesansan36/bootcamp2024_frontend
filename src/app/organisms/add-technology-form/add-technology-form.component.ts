import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-add-technology-form',
	templateUrl: './add-technology-form.component.html',
	styleUrls: ['./add-technology-form.component.scss']
})
export class AddTechnologyFormComponent {
	http = inject(HttpClient);
	@Input() legendText: string = 'legend text';


	// ngOnInit(): void {
	// 	// this.http.get('http://localhost:8090/technology/search/t_A')
	// 	// 	.subscribe(res => console.log(res));
	// }

	handleClick() {
		this.http.get('http://localhost:8090/technology/search/t_A')
			// .subscribe(res => console.log(res));
	}
}
