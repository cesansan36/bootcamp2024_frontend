import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
	@Input() labelText: string = 'label text';
	@Input() placeholder: string = 'placeholder text';

	@Output() notifyValueChange = new EventEmitter<string>();

	fieldInputValue: string = '';

	inputEvent(value: string) {
		this.fieldInputValue = value;
		this.notifyValueChange.emit(this.fieldInputValue);
	}
}
