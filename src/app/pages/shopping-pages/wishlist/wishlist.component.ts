import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.component.html',
	styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
	public products: any = [];

	constructor(private shopDetail: ShopDetailService) { }

	ngOnInit(): void {
		this.shopDetail.getWishData().subscribe((res: any) => {

			this.products = res; 

			let Data = localStorage.getItem('wishData');
			Data = JSON.parse(Data);
			console.log(Data);

			if (this.products == '') {
				this.products = Data;
			}

		})

	}

	//To Remove Cart item
	removeWishItem(item: any) {
		let result = this.shopDetail.removeWishItem(item, this.products)
		console.log(result);

		this.wishNumberFunc();
		// this.wishNumber = 0;

		// this.products = result;
		// for (let i = 0; i < this.products.length; i++) {
		// 	this.cartNum = this.product[i].quantity + this.cartNum
		// }
	
	}


	wishNumber:number = 0;
	wishNumberFunc(){
		var wishValue = JSON.parse(localStorage.getItem('wishData'));
		this.wishNumber = wishValue.length;
		this.shopDetail.wishSubject.next(this.wishNumber);
		console.log(this.wishNumber);
		
	}

}
