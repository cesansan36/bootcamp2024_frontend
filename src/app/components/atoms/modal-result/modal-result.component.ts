import { Component, Input } from '@angular/core';
import { ModalResultModel } from 'src/app/models/componentmodels/modal-result-model';
import { MODAL_RESULT_INITIAL } from 'src/utils/initialstates/component/modalresult/modal-result-initial';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss']
})
export class ModalResultComponent {

	@Input() modalModel: ModalResultModel = {...MODAL_RESULT_INITIAL};
}
