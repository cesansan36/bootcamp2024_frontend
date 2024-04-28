import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
	selector: 'app-page-selector',
	templateUrl: './page-selector.component.html',
	styleUrls: ['./page-selector.component.scss']
})
export class PageSelectorComponent {

	http = inject(HttpClient);

	radioValue: string = 'true';
	@Input() pageValue: number = 1;
	itemsPerPageValue: number = 10;

	handleButtonClicked() {
		this.performSearch();
	}

	handlePageChange(value: number) {
		this.pageValue = value - 1;
	}

	handleItemsPerPageChange(value: number) {
		this.itemsPerPageValue = value;
	}

	handleRadioChange(value: string) {
		this.radioValue = value;
	}

	@Output() urlSent = new EventEmitter<Technology[]>();

	performSearch() {
		var url = 'http://localhost:8090/technology/?page=' + this.pageValue + '&size=' + this.itemsPerPageValue + '&isAscending=' + this.radioValue;

		this.http.get<Technology[]>(url)
			.subscribe(res => {
				this.urlSent.emit(res);
			});
	}
}
