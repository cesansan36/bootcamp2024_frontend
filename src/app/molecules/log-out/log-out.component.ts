import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-log-out',
	templateUrl: './log-out.component.html',
	styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {

	onLogOut() {
		localStorage.removeItem('token');
	}
}
