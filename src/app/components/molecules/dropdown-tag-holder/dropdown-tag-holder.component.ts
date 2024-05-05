import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextValuePair } from 'src/app/models/text-value-pair';

@Component({
	selector: 'app-dropdown-tag-holder',
	templateUrl: './dropdown-tag-holder.component.html',
	styleUrls: ['./dropdown-tag-holder.component.scss']
})
export class DropdownTagHolderComponent {
	@Input() options: TextValuePair[] = [];
	@Input() tags: TextValuePair[] = [
		{
			text: 'Tag 1',
			value: 'value1'
		},
		{
			text: 'Tag 2',
			value: 'value2'
		},
		{
			text: 'Tag 3',
			value: 'value3'
		},
		{
			text: 'Tag 4',
			value: 'value4'
		}
	];

	@Output() currentTags = new EventEmitter<TextValuePair[]>();
@Input() label: string = 'label';

	emitTags() {
		this.currentTags.emit(this.tags);
	}

	addTag(value: TextValuePair) {
		this.tags.push(value);
		this.emitTags();
	}

	removeTag(value: string) {
		this.tags = this.tags.filter(tag => tag.value !== value);
		this.emitTags();
	}
}
