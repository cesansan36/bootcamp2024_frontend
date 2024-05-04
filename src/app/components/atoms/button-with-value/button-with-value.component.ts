import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-value',
  templateUrl: './button-with-value.component.html',
  styleUrls: ['./button-with-value.component.scss']
})
export class ButtonWithValueComponent {
	@Input () buttonText: string = '';
	@Input () buttonValue: string = '';

	@Output () buttonClicked = new EventEmitter<string>();

	handleClick() {
		this.buttonClicked.emit(this.buttonValue);
	}

}
