import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-small-number',
	templateUrl: './small-number.component.html',
	styleUrls: ['./small-number.component.scss']
})
export class SmallNumberComponent {

	inputValue: number = 1;

	@Output() valueChanged = new EventEmitter<number>();
	onInputChange() {
		this.valueChanged.emit(this.inputValue);
	}


}
