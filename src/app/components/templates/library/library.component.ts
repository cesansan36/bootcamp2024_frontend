import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { PAGINATION_SIZE_OPTIONS } from 'src/utils/pagination-size-options';
import { PaginatorService } from 'src/app/services/paginator.service';
import { ResultCardContent } from 'src/app/models/componentmodels/result-card-content';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
	addService = inject(CreateServiceService);
	paginatorService = inject(PaginatorService);

	@Input() libraryModal: LibraryModal = { ...LIBRARY_MODAL_INITIAL };
	pageSizeOptions: TextValuePair[] = [...PAGINATION_SIZE_OPTIONS];
	@Output() libraryModalChange = new EventEmitter<LibraryModal>();

	showModal() {
		this.libraryModal.modal.isModalVisible = true;
		this.libraryModalChange.emit(this.libraryModal);
	}
	hideModal() {
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModalChange.emit(this.libraryModal);
	}

	@Output() formButtonClicked = new EventEmitter();

	@Input() results: ResultCardContent[] = [];
	@Output() resultsChange = new EventEmitter<ResultCardContent[]>();

	handleModalButtonClick() {
		this.formButtonClicked.emit();
	}

	handleItemsPerPageChange(option: TextValuePair) {
		this.paginatorService.itemsPerPage = +option.value;
	}
	handlePageChange(value: number) {
		this.paginatorService.currentPage = value;
	}
}
