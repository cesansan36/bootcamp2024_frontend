import { Component, Input } from '@angular/core';
import { Technology } from '../../../models/technology.model';

@Component({
	selector: 'app-results-holder',
	templateUrl: './results-holder.component.html',
	styleUrls: ['./results-holder.component.scss']
})
export class ResultsHolderComponent {
	@Input() results!: Technology[]
}
