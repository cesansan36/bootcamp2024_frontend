import { AfterViewInit, Component, ContentChild, inject } from '@angular/core';
import { LibraryModal } from 'src/app/models/componentmodels/library-modal';
import { ResultCardContent } from 'src/app/models/componentmodels/result-card-content';
import { AddTechnologyRequest } from 'src/app/models/datamodels/add-technology-request';
import { GetTechnologiesPaginatedParams } from 'src/app/models/datamodels/get-technologies-paginated-params';
import { Technology } from 'src/app/models/technology.model';
import { CreateServiceService } from 'src/app/services/create-service.service';
import { PaginatorService } from 'src/app/services/paginator.service';
import { ReadService } from 'src/app/services/read/read.service';
import { ButtonTextConstants } from 'src/utils/button-text-constants';
import { LIBRARY_MODAL_INITIAL } from 'src/utils/initialstates/component/librarymodal/library-modal';
import { MODAL_INITIAL } from 'src/utils/initialstates/component/modal/modal-initial';
import { ADD_TECHNOLOGY_INITIAL } from 'src/utils/initialstates/data/addtechnologyrequest/add-technology-initial';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

	addService = inject(CreateServiceService);
	readService = inject(ReadService);
	paginatorService = inject(PaginatorService);
	addTechnologyRequest: AddTechnologyRequest = { ...ADD_TECHNOLOGY_INITIAL };

	libraryModal: LibraryModal = {
		...LIBRARY_MODAL_INITIAL,
		modal: {
			...MODAL_INITIAL,
			buttonText: ButtonTextConstants.CREATE,
			title: TextConstants.TECHNOLOGY_LABEL
		}
	};

	getPaginatedTechnologies() {
		let technologyParams: GetTechnologiesPaginatedParams = {
			page: this.paginatorService.currentPage,
			size: this.paginatorService.itemsPerPage,
			isAscending: true
		}
		this.readService.readTechnologyPaginated(technologyParams).subscribe({
			next: (technologies: Technology[]) => {
				this.results = technologies.map(technology => ({
					index:technology.id,
					id: technology.id,
					name: technology.name,
					description: technology.description,
				}));
			},
			error: (error) => {
				this.results = [];
			}
		})
	}

	results: ResultCardContent[] = [];

	ngOnInit() {
		this.readService.readTechnologyListComplete().subscribe({
			next: (technologies) => {
				this.paginatorService.totalItems = technologies.length;
			},
			error: (error) => {
				this.paginatorService.totalItems = 0;
			}
		});
		this.getPaginatedTechnologies();
	}

	updateTechnologyName(value: string) {
		this.addTechnologyRequest = { ...this.addTechnologyRequest, name: value };
	}
	updateTechnologyDescription(value: string) {
		this.addTechnologyRequest = { ...this.addTechnologyRequest, description: value };
	}

	hideModal() {
		this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModal.isModalResult = false;
	}

	handleModalButtonClick() {
		if (this.libraryModal.modal.buttonText === ButtonTextConstants.CREATE) {
			this.tryAddTechnology();
		}
		else if (this.libraryModal.modal.buttonText === ButtonTextConstants.ACCEPT) {
			this.hideModal();
		}
		else {
			this.libraryModal.isModalResult = false;
			this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		}
	}

	tryAddTechnology() {

		this.addService.createTechnology(this.addTechnologyRequest).subscribe({
			next: () => {
				this.libraryModal.isModalResult = true;
				this.libraryModal.modal.buttonText = ButtonTextConstants.ACCEPT;
				this.libraryModal.modalResult.text = TextConstants.TECHNOLOGY_CREATED_MESSAGE;
				this.libraryModal.modalResult.isSuccess = true;
			},
			error: (error) => {
				let errorMessage = TextConstants.UNDEFINED_ERROR;
				if (error.error && error.error.message) {
					errorMessage = error.error.message;
				}

				this.libraryModal.modal.buttonText = ButtonTextConstants.GO_BACK;
				this.libraryModal.modalResult.text = errorMessage;
				this.libraryModal.modalResult.isSuccess = false;
				this.libraryModal.isModalResult = true;
			}
		});
	}

}
