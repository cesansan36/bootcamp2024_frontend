import { Injectable, inject } from '@angular/core';
import { AddTechnologyRequest } from '../models/datamodels/add-technology-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { AddCapabilityRequest } from '../models/datamodels/add-capability-request';
import { AddBootcampRequest } from '../models/datamodels/add-bootcamp-request';

@Injectable({
	providedIn: 'root'
})
export class CreateServiceService {

	http = inject(HttpClient);

	createTechnology(technologyData: AddTechnologyRequest): Observable<any> {
		let url = "http://localhost:8090/technology/add";

		return this.http.post(url, technologyData);
	}
	createCapability(capabilityData: AddCapabilityRequest): Observable<any> {
		let url = "http://localhost:8090/capability/add";

		return this.http.post(url, capabilityData);
	}
	createBootcamp(bootcampData: AddBootcampRequest): Observable<any> {
		let url = "http://localhost:8090/bootcamp/add";

		return this.http.post(url, bootcampData);
	}

	// simulatedRequest(isError: boolean): Observable<any> {
	// 	delay(1000);

	// 	if (isError) {
	// 		let er = new HttpErrorResponse({ error: 'Simulated error' });
	// 		throw er;
	// 		return of(er);
	// 	}
	// 	return of(true);
	// }
}
