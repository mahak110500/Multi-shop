import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';
@Component({
	selector: 'app-header-third',
	templateUrl: './header-third.component.html',
	styleUrls: ['./header-third.component.css']
})
export class HeaderThirdComponent implements OnInit {
	totalItem:any = [];
	public wishlistItem: number = 0;

	constructor(private shopDetail: ShopDetailService) {
		this.shopDetail.wishSubject.subscribe((data)=> {
			this.wishItem = data;
		})
	}

	ngOnInit(): void {
		// this.shopDetail.getProductData().subscribe((res) => {
		// 	this.totalItem = res.length;
		// })

		this.shopDetail.cartSubject.subscribe((res)=> {
			this.cartItem = res;
		})
		this.cartItemFunc();

		this.wishItemFunc();
	

		// this.shopDetail.getWishData().subscribe((res)=>{
		// 	this.totalItem = res.length;
		// 	console.log(this.totalItem);
			
		// })
	
	

	}

	cartItem:number = 0;
	cartItemFunc(){
		if(localStorage.getItem('productData') != null){
			var cartCount = JSON.parse(localStorage.getItem('productData')) ;
			console.log(cartCount);

			for(let i=0; i<cartCount.length; i++){
				this.cartItem =	cartCount[i].quantity + this.cartItem
			}
		}
	}

	wishItem:number= 0;
	wishItemFunc(){
		if(localStorage.getItem('wishData') != null){
			var wishCount = JSON.parse(localStorage.getItem('wishData'));
			this.wishItem = wishCount.length;
			console.log(wishCount);
			
			// this.wishItem = wishCount.length;
		}
	}


}
