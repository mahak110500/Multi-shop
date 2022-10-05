import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

	methodAvailable: string[] = ['Paypal', 'Direct', 'Bank'];

	constructor(private shopDetail: ShopDetailService, private router: Router) { }

	ngOnInit(): void {
		this.show = false;

		this.shopDetail.getProductData().subscribe((res: any) => {
			this.product = res;
			let data = localStorage.getItem('productData');
			data = JSON.parse(data);

			if (this.product == '') {
				this.product = data
			}

			this.grandTotal = this.shopDetail.getTotalPrice()
		})

		this.checkoutform = new FormGroup({
			checkoutInfo: new FormGroup({
				firstName: new FormControl(null, Validators.required),
				lastName: new FormControl(null, Validators.required),
				email: new FormControl(null, Validators.required),
				mobileNo: new FormControl(null, [Validators.required, Validators.email]),
				address1: new FormControl(null, Validators.required),
				address2: new FormControl(null, Validators.required),
				country: new FormControl(null, Validators.required),
				city: new FormControl(null, Validators.required),
				state: new FormControl(null, [Validators.required, Validators.email]),
				zipCode: new FormControl(null, Validators.required,),

			})
		});
	}


	showDiv() {
		console.log(this.show);
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
		localStorage.setItem('cart_total', JSON.stringify(this.Total));
		this.router.navigate(['/payment'])


		// console.log(this.selectedMethod)  //Will give you the role selected;
		// if (this.selectedMethod == "Paypal") {
		// 	this.router.navigate(['/payment'])
		// }
		// else if (this.selectedMethod == "Direct") {
		// 	this.router.navigate(['/checkout'])
		// }
		// else if (this.selectedMethod == "Bank") {
		// 	this.router.navigate(['/checkout'])
		// }
	}

}
