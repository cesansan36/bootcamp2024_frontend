import { Injectable, inject } from '@angular/core';
import { AddTechnologyRequest } from '../models/add-technology-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ResponseStatus } from '../models/response-status';

@Injectable({
	providedIn: 'root'
})
export class CreateServiceService {

	http = inject(HttpClient);

	createTechnology(technologyData: AddTechnologyRequest): Observable<any> {
		let url = "http://localhost:8090/technology/add";

		return this.http.post(url, technologyData);
		// .pipe(
		// 	catchError((error: HttpErrorResponse) => {
		// 		throw error;
		// 	})
		// );

		// let responseStatus: ResponseStatus = {
		// 	isSuccess: false,
		// 	message: ""
		// }

		// this.http.post(url, technologyData).subscribe({

		// 	next: () => {
		// 		responseStatus.isSuccess = true;
		// 		responseStatus.message = "Technology added successfuly";
		// 	},
		// 	error: (e: HttpErrorResponse) => {
		// 		if (e.error == null) {
		// 			responseStatus.message = "UndefinedError";
		// 		}
		// 		else {
		// 			responseStatus.message = e.error.message;
		// 		}
		// 	}
		// })
		// return of(responseStatus);



		// let result : boolean = false;

		// return this.http.post(url, technologyData).pipe(
		// 	map(() => true), // Mapea la respuesta a true
		// 	catchError((error: HttpErrorResponse) => {
		// 		console.error(error);
		// 		return of(false); // Devuelve false en caso de error
		// 	})
		// );
	}
	// createTechnology(technologyData: AddTechnologyRequest) : boolean {
	// 	let url = "http://localhost:8090/technology/add";
	// 	let result : boolean = false;

	// 	this.http.post(url, technologyData).subscribe({

	// 		next: () => {
	// 			result = true;
	// 		},
	// 		error: (e: HttpErrorResponse) => {
	// 			result = false;
	// 			if (e.error == null) {
	// 				console.log("Error no determinado");
	// 				console.log(e);
	// 			}
	// 			else {
	// 				console.log(e.error.message);
	// 			}
	// 		}
	// 	})
	// 	return result;
	// }
}
