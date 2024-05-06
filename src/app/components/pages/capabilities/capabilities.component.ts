import { Component, inject } from '@angular/core';
import { TechnologyInCapabiliyResponse } from 'src/app/models/datamodels/technology-in-capability-response';
import { TextValuePair } from 'src/app/models/text-value-pair';
import { ReadService } from 'src/app/services/read/read.service';
import { LibraryModalUser } from 'src/app/tools/librarymodaluser/library-modal-user';
import { CapabilityRecorder } from 'src/app/tools/recorders/capability-recorder';
import { TextConstants } from 'src/utils/text-constats';

@Component({
	selector: 'app-capabilities',
	templateUrl: './capabilities.component.html',
	styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {

	readService = inject(ReadService);

	options: TextValuePair[] = [];

	ngOnInit() {
		this.readService.readTechnologyListComplete().subscribe(
			{
				next: (x : TechnologyInCapabiliyResponse[]) => {
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

	capabilityRecorder :CapabilityRecorder = new CapabilityRecorder();

	handleModalButtonClick() {
		if (this.libraryModalUser.isCreateClick()) {
			this.capabilityRecorder.tryAddCapability(this.libraryModalUser);
		}
		else {
			this.libraryModalUser.handleModalButtonClick();
		}
	}
}
