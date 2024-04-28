import { Component } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';

@Component({
	selector: 'app-search-list',
	templateUrl: './search-list.component.html',
	styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
	technologies: Technology[] = []

	updateTechnologies(technologies : Technology[]) {
		this.technologies = technologies;
	}
}
