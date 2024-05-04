import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss']
})
export class ModalResultComponent {
	@Input() isSuccess: boolean = true;
	@Input() text: string = 'text not set';
}
