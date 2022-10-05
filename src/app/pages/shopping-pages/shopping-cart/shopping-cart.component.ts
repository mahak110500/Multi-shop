import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

	public product: any = [];
	public grandTotal !: number;
	item: any;

	constructor(private shopDetail: ShopDetailService, private router: Router) { }

	ngOnInit(): void {
		this.shopDetail.getProductData().subscribe((res: any) => {
			this.product = res;
			let data = localStorage.getItem('productData');
			data = JSON.parse(data);

			// let dataCart = this.shopDetail.saveCart();
			// dataCart = JSON.parse(dataCart);

			if (this.product == '') {
				this.product = data;
			}

			this.grandTotal = this.shopDetail.getTotalPrice();
		})
		// this.shopDetail.saveCart();

	}

	//To Remove item
	removeItem(item: any) {
		this.shopDetail.removeCartItem(item, this.product);
	}

	inc(item: any) {
		console.log(item);
		if (item.quantity != 6) {
			item.quantity += 1;
		}

	}

	dec(item: any) {
		if (item.quantity != 1) {
			item.quantity -= 1;
		}
	}

	
	//Calculate cart Total
	get Total(){
		return this.product?.reduce(
			(sum,x) => ({
				quantity:1,
				price: sum.price + x.quantity * x.price 
			}),
			{quantity:1, price:0}
		).price
	}

	checkOut(){
		localStorage.setItem('cart_total', JSON.stringify(this.Total));
		this.router.navigate(['/checkout']);
	}



}
