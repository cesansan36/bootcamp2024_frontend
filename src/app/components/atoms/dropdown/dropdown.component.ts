import { Component, Input } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdownOption';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

	@Input() options: DropdownOption[] = [
		{
			label: 'Option 1',
			value: "1"
		},
		{
			label: 'Option 2',
			value: "2"
		}
	];

}
