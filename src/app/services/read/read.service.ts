import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ReadService {

	http = inject(HttpClient);

	readTechnologyListComplete(): Observable<any> {
		let url = 'http://localhost:8090/technology/?page=0&size=999&isAscending=true';

		return this.http.get(url);
	}
	readCapabilityListComplete(): Observable<any> {
		let url = 'http://localhost:8090/capability/?page=0&size=999&isAscending=true&isSortByTechnologiesAmount=false';

		return this.http.get(url);
	}
}
