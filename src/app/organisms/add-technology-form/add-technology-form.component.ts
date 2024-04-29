import { Component, Input, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-add-technology-form',
	templateUrl: './add-technology-form.component.html',
	styleUrls: ['./add-technology-form.component.scss']
})
export class AddTechnologyFormComponent {
	http = inject(HttpClient);
	name = '';
	description = '';
	resultMessage: string = '';

	updateName(value: string) {
		this.name = value;
	}
	updateDescription(value: string) {
		this.description = value;
	}

	@Input() legendText: string = 'legend text';

	handleClick() {
		let url = "http://localhost:8090/technology/add"
		let techData = {
			name: this.name,
			description: this.description
		}
		let tokenTutor = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXRhbm9AeWltZWlsLmNvbSIsImlzcyI6Imp3dFVzZXJHZW5lcmF0b3IiLCJleHAiOjE3MTQ2OTM5MjYsImlhdCI6MTcxNDA4OTEyNiwiYXV0aG9yaXRpZXMiOiJST0xFX1RVVE9SIn0.2r40OznHld4LR0PVAE7bLOTFtZ46BMA-A9oqc_8SQAE';
		let tokenAdmin = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmdWxhbm9AeWltZWlsLmNvbSIsImlzcyI6Imp3dFVzZXJHZW5lcmF0b3IiLCJleHAiOjE3MTQ2OTM5MTUsImlhdCI6MTcxNDA4OTExNSwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOIn0.z7Drao2XgX6UQrLkHLmgpVfj7-0fGvf9FevPSRrhCaw';
		let tokenStudent = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJlbmNlam9AeWltZWlsLmNvbSIsImlzcyI6Imp3dFVzZXJHZW5lcmF0b3IiLCJleHAiOjE3MTQ2OTM5MzcsImlhdCI6MTcxNDA4OTEzNywiYXV0aG9yaXRpZXMiOiJST0xFX1NUVURFTlQifQ.qKaVoArL_kmyo65ods3ViVlAHNfXwt-D4NlihEY3RAU';
		let tokenStored = localStorage.getItem('token');

		let headers = new HttpHeaders().set('Authorization', 'Bearer ' + tokenStored);

		this.http.post(url, techData, { headers: headers })
			.subscribe({
				next: () => {
					this.resultMessage = "Technology created successfully";
				},
				error: (e :HttpErrorResponse) => {
					if (e.error == null) {
						console.log(e);
						this.resultMessage = "You don't have access to create technologies";
					}
					else {
						this.resultMessage = e.error.message;
					}
				}
			});
	}
}
