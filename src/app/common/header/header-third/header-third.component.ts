import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';
@Component({
	selector: 'app-header-third',
	templateUrl: './header-third.component.html',
	styleUrls: ['./header-third.component.css']
})
export class HeaderThirdComponent implements OnInit {
	
	public wishlistItem: number = 0;
	constructor(private shopDetail: ShopDetailService) {
		
	 }

	ngOnInit(): void {
		// this.shopDetail.getProductData().subscribe((res) => {
		// 	this.totalItem = res.length;
		// })

		this.shopDetail.cartSubject.subscribe((res)=> {
			this.cartItem = res;
		})
		this.cartItemFunc();
	
		//FOR WISHLIST COMPONENT
		// this.shopDetail.getProductData().subscribe((result) => {
		// 	this.wishlistItem = result.length;
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


}
