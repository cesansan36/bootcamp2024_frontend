import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-result-card',
	templateUrl: './result-card.component.html',
	styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
	@Input() id: number = 0;
	@Input() name: string = 'some name';
	@Input() description: string = 'some description';

}
