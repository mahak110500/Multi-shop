import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../models/orderHistory.model';


@Injectable({
	providedIn: 'root'
})
export class OrderHistoryService {

	baseURL: string = "http://localhost:3000/";

	constructor(private http: HttpClient) { }


	// getOrders(): Observable<OrderHistory[]> {
	// 	console.log('getOrders' + this.baseURL + 'history');
	// 	return this.http.get<OrderHistory[]>(this.baseURL + 'history')

	// }

	// addOrders(orders: OrderHistory): Observable<any> {
	// 	const headers = { 'content-type': 'application/json' }
	// 	const body = JSON.stringify(orders);
	// 	console.log(body);
	// 	console.log(orders);

	// 	return this.http.post(this.baseURL + 'history', body, { 'headers': headers })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	// }

	viewOrderHistory(){
	  return this.http.get('http://localhost:3000/history');
	}

	viewHistoryData(){
		 return this.http.get('http://localhost:3000/shoppingCart')
	}

}
