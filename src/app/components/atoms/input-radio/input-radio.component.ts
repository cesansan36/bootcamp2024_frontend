import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-input-radio',
	templateUrl: './input-radio.component.html',
	styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent {
	@Input() value: string = 'a';
	@Input() groupName: string = 'a';
	@Input() isChecked: boolean = false;
	@Input() text: string = 'a';

	@Output() valueChanged = new EventEmitter<string>();

	onRadioChange() {
		this.valueChanged.emit(this.value);
	}
}
