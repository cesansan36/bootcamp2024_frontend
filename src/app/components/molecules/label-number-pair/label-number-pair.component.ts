import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-label-number-pair',
	templateUrl: './label-number-pair.component.html',
	styleUrls: ['./label-number-pair.component.scss']
})
export class LabelNumberPairComponent {
	@Input() label: string = 'label';
	inputValue: number = 1;

	@Output() valueChanged = new EventEmitter<number>();

	onInputChange(value: number) {
		this.inputValue = value;
		this.valueChanged.emit(this.inputValue);
	}

}
