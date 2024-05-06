import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBootcampPaginatedParams } from 'src/app/models/datamodels/get-bootcamp-paginated-params';
import { GetCapabilitiesPaginatedParams } from 'src/app/models/datamodels/get-capabilities-paginated-params';
import { GetTechnologiesPaginatedParams } from 'src/app/models/datamodels/get-technologies-paginated-params';

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

	readTechnologyPaginated(params: GetTechnologiesPaginatedParams): Observable<any> {
		let url = 'http://localhost:8090/technology/?page='+params.page+'&size='+params.size+'&isAscending='+params.isAscending;

		return this.http.get(url);
	}

	readCapabilitiesPaginated(params: GetCapabilitiesPaginatedParams): Observable<any> {
		let url = 'http://localhost:8090/capability/?page='+params.page+'&size='+params.size+'&isAscending='+params.isAscending+'&isSortByTechnologiesAmount='+params.isSortByTechnologiesAmount;

		return this.http.get(url);
	}

	readBootcampPaginated(params: GetBootcampPaginatedParams): Observable<any> {
		let url = 'http://localhost:8090/bootcamp/?page='+params.page+'&size='+params.size+'&isAscending='+params.isAscending+'&isSortByCapabilitiesAmount='+params.isSortByCapabilitiesAmount;

		return this.http.get(url);
	}
}
