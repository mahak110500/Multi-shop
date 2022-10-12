import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { OrderHistoryService } from 'src/app/services/order-history.service';
import { ShopDetailService } from 'src/app/services/shop-detail.service';


@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	checkoutform: any;
	show: boolean
	public product: any = [];
	public grandTotal !: number;
	selectedMethod: string;

	paymentSelected = false;

	history: OrderHistory[];
	orders: any = new OrderHistory();

	methodAvailable: string[] = ['Paypal', 'Direct', 'Bank'];

	constructor(
		private shopDetail: ShopDetailService,
		private router: Router,
		private prevHistory: OrderHistoryService
	) { }

	ngOnInit(): void {
		this.show = false;

		this.shopDetail.getProductData().subscribe((res: any) => {
			this.product = res;
			let data = localStorage.getItem('productData');
			data = JSON.parse(data);

			if (this.product == '') {
				this.product = data
			}

		});

		// this.refreshOrders();

		this.checkoutform = new FormGroup({
			checkoutInfo: new FormGroup({
				firstName: new FormControl(null, Validators.required),
				lastName: new FormControl(null, Validators.required),
				mobileNo: new FormControl(null, Validators.required),
				email: new FormControl(null, [Validators.required, Validators.email]),
				address1: new FormControl(null, Validators.required),
				address2: new FormControl(null, Validators.required),
				country: new FormControl(null, Validators.required),
				city: new FormControl(null, Validators.required),
				state: new FormControl(null, Validators.required),
				zipCode: new FormControl(null, Validators.required,),

			})
		});
	}


	showDiv() {
		// console.log(this.show);
		this.show = !this.show;
	}


	onSubmit() {
		console.log(this.checkoutform);

	}

	get Total() {
		return this.product?.reduce(
			(sum, x) => ({
				quantity: 1,
				price: sum.price + x.quantity * x.price
			}),
			{ quantity: 1, price: 0 }
		).price
	}

	OncheckOut() {
		if (this.paymentSelected) {
			// this.addOrders();

			localStorage.setItem('cart_total', JSON.stringify(this.Total));
			this.router.navigate(['/payment'])
		}
	}

	// refreshOrders() {
	// 	this.prevHistory.getOrders().subscribe((result) => {
	// 		console.log(result);
	// 		this.history = result;
	// 	})
	// }



	// addOrders() {
		
	// 	console.log(this.orders);
		
		
	// 	this.prevHistory.addOrders(this.orders).subscribe((res) => {
	// 		console.log(res);
	// 		this.refreshOrders();
	// 	})
	// }

	onChange(a: any) {
		if (a == '7') {

			this.paymentSelected = !this.paymentSelected;
		}
		else {
			this.paymentSelected = false;
		}


	}

}
