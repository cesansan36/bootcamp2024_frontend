import { Component } from '@angular/core';
import { TextValuePair } from 'src/app/models/text-value-pair';

@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.scss']
})
export class LibraryNavComponent {
	links: TextValuePair[] = [
		{
			text: 'Tecnologías',
			value: '/library/technologies'
		},
		{
			text: 'Capacidades',
			value: '/library/capabilities'
		},
		{
			text: 'Bootcamp',
			value: '/library/bootcamp'
		}
	]
}
