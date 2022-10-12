import { HttpClient, HttpHeaders } from '@angular/common/http';
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

	constructor(private shopDetail: ShopDetailService, private router: Router, private http: HttpClient) { }

	ngOnInit(): void {
		this.shopDetail.getProductData().subscribe((res: any) => {
			this.product = res;  //array of products getting added to cart

			let data = localStorage.getItem('productData');
			data = JSON.parse(data);  //object of products getting added to shopping cart and stored in localstorage

			if (this.product == '') {
				this.product = data;
			}

		})

		//For total cart count
		// this.shopDetail.totalItemsCount(this.shopDetail.productCount);


	}

	//To Remove Cart item
	removeItem(item: any) {
		let res = this.shopDetail.removeCartItem(item, this.product)
		console.log(res);
		this.cartNum = 0;

		this.product = res;
		for (let i = 0; i < this.product.length; i++) {
			this.cartNum = this.product[i].quantity + this.cartNum
		}

		this.cartNumberFunc();
	}

	cartNumber: number = 0;
	cartNumberFunc() {
		var cartValue = JSON.parse(localStorage.getItem('productData'));
		this.cartNumber = cartValue.length;
		// console.log(this.cartNumber);

		this.shopDetail.cartSubject.next(this.cartNum);

	}


	cartNum: any = 0;

	inc(id, quantity) {
		for (let i = 0; i < this.product.length; i++) {
			if (this.product[i].id === id) {
				if (quantity != 5)
					this.product[i].quantity = parseInt(quantity) + 1;
			}
		}

		this.cartNum = 0;

		for (let i = 0; i < this.product.length; i++) {
			this.cartNum = this.product[i].quantity + this.cartNum
		}
		localStorage.setItem('productData', JSON.stringify(this.product));
		this.cartNumberFunc();
	}



	dec(id, quantity) {
		for (let i = 0; i < this.product.length; i++) {
			if (this.product[i].id === id) {
				if (quantity != 1)
					this.product[i].quantity = parseInt(quantity) - 1;
			}
		}
		localStorage.setItem('productData', JSON.stringify(this.product));

		this.cartNum = 0;

		for (let i = 0; i < this.product.length; i++) {
			this.cartNum = this.product[i].quantity + this.cartNum
		}
		this.cartNumberFunc();
	}


	//Calculate cart Total
	get Total() {
		return this.product?.reduce(
			(sum, x) => ({
				quantity: 1,
				price: sum.price + x.quantity * x.price
			}),
			{ quantity: 1, price: 0 }
		).price

	}

	checkOut(product: any) {

		this.shopDetail.onCheckout(product);


		localStorage.getItem('productData');
		localStorage.setItem('cart_total', JSON.stringify(this.Total));
		this.router.navigate(['/checkout']);
	}



}
