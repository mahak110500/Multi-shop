import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'ngx-paypal';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { shopDetails } from 'src/app/models/shop-details.model';
import { OrderHistoryService } from 'src/app/services/order-history.service';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
	public ordersList: any = [];
	public productsOrdered: any = [];
	product:any;


	// history: OrderHistory[];
	// orders: any = new OrderHistory();
	// orders: new OrderHistory();

	constructor(
		private prevHistory: OrderHistoryService, 
		private shopDetail: ShopDetailService, 
		private http:HttpClient
	) { }

	ngOnInit(): void {
		this.prevHistory.viewHistoryData().subscribe((res)=> {
			console.log(res);
			this.productsOrdered = res;
			console.log(this.productsOrdered);
			
		})

	}

	

}
