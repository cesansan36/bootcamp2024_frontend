import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaginatorService {

	currentPage: number = 0;
	totalItems: number = 100;
	itemsPerPage: number = 10;
}
