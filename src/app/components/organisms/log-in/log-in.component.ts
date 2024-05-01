import { HttpClient } from '@angular/common/http';
import { Token } from '../../../models/token.model';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

	http = inject(HttpClient);
	password: string = '';
	username: string = '';

	onClick() {
		let url = 'http://localhost:8080/users/login';
		let obj = {
			"email": this.username,
			"password": this.password
		}

		this.http.post<Token>(url, obj).subscribe(res => {

			localStorage.setItem('token', res.token);
			console.log(res.token);
		});
	}

}
