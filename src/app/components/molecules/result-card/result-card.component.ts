import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultCardContent } from 'src/app/models/componentmodels/result-card-content';
import { RESULT_CARD_INITIAL } from 'src/utils/initialstates/component/resultcardcontent/result-card-initial';

@Component({
	selector: 'app-result-card',
	templateUrl: './result-card.component.html',
	styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {

	@Input() resultCardContent: ResultCardContent = {...RESULT_CARD_INITIAL};

	@Output() formButtonClicked = new EventEmitter();

	handleButtonClick() {
		this.formButtonClicked.emit();
	}
}
