import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
	pageNumber: number = 1;

	@Output() pageNumberChange = new EventEmitter<number>();

	handlePageNumberChange() {
		this.pageNumberChange.emit(this.pageNumber);
	}
}
