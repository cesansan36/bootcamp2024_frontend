import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() buttonText: string = 'button works!';

	@Output() buttonClicked = new EventEmitter();
	handleClick() {
		this.buttonClicked.emit();
	}
}
