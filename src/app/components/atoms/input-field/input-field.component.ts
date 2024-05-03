import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-field',
	templateUrl: './input-field.component.html',
	styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
	inputValue: string = '';

	@Input() label: string = 'no text set';
	@Input() placeholder: string = 'no text set';

	@Output() valueChanged = new EventEmitter<string>();

	onInputChange() {
		this.valueChanged.emit(this.inputValue);
	}
}
