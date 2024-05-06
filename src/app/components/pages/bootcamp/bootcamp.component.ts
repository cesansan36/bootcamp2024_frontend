import { Component, inject } from '@angular/core';
import { CapabilityInBootcampResponse } from 'src/app/models/datamodels/capability-in-bootcamp-response';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { ReadService } from 'src/app/services/read/read.service';
import { LibraryModalUser } from 'src/app/tools/librarymodaluser/library-modal-user';
import { BootcampRecorder } from 'src/app/tools/recorders/bootcamp-recorder';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-bootcamp',
	templateUrl: './bootcamp.component.html',
	styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent {

	readService = inject(ReadService);

	options: TextValuePair[] = [];

	ngOnInit() {
		this.readService.readCapabilityListComplete().subscribe(
			{
				next: (x: CapabilityInBootcampResponse[]) => {
					this.options = x.map(y => ({
						text: y.name,
						value: y.name
					}))
				},
				error: () => {
					this.options = [{
						text: TextConstants.UNDEFINED_ERROR,
						value: TextConstants.UNDEFINED_ERROR
					}]
				}
			}
		);
	}
	libraryModalUser: LibraryModalUser = new LibraryModalUser(TextConstants.TECHNOLOGY_LABEL);

	bootcampRecorder: BootcampRecorder = new BootcampRecorder();

	handleModalButtonClick() {
		if (this.libraryModalUser.isCreateClick()) {
			this.bootcampRecorder.tryAddBootcamp(this.libraryModalUser);
		}
		else {
			this.libraryModalUser.handleModalButtonClick();
		}
	}
}
