import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdownOption';
import { TextValuePair } from 'src/app/models/text-value-pair';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

	selectedOption: string = '';

	@Input() options: TextValuePair[] = [
		{
			text: 'Option 1',
			value: "1"
		},
		{
			text: 'Option 2',
			value: "2"
		}
	];

	@Output() optionSelected = new EventEmitter<TextValuePair>();

	onOptionChange(optionValue: string) {
		this.selectedOption = optionValue;
		console.log("selected: " +this.selectedOption);
		this.optionSelected.emit(this.options.find(option => option.value === this.selectedOption)!);
	}
}
