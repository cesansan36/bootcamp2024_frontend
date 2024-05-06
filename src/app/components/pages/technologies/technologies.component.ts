import { Component, inject } from '@angular/core';
import { ResultCardContent } from 'src/app/models/componentmodels/result-card-content';
import { GetTechnologiesPaginatedParams } from 'src/app/models/datamodels/get-technologies-paginated-params';
import { Technology } from 'src/app/models/technology.model';
import { PaginatorService } from 'src/app/services/paginator.service';
import { ReadService } from 'src/app/services/read/read.service';
import { LibraryModalUser } from 'src/app/tools/librarymodaluser/library-modal-user';
import { TechnologyRecorder } from 'src/app/tools/recorders/technology-recorder';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

	readService = inject(ReadService);
	paginatorService = inject(PaginatorService);

	results: ResultCardContent[] = [];
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

	technologyRecorder :TechnologyRecorder = new TechnologyRecorder();

	libraryModalUser: LibraryModalUser = new LibraryModalUser(TextConstants.TECHNOLOGY_LABEL);

	handleModalButtonClick() {
		if (this.libraryModalUser.isCreateClick()) {
			this.technologyRecorder.tryAddTechnology(this.libraryModalUser);
		}
		else {
			this.libraryModalUser.handleModalButtonClick();
		}
	}
}
