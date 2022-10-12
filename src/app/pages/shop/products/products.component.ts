import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	public productList: any = [];
	

	constructor(private shop: ShopService, private shopDetail: ShopDetailService) { }

	ngOnInit(): void {
		this.shop.viewShopProducts().subscribe((res) => {
			this.productList = res;

			this.productList.forEach((a: any) => {
				Object.assign(a, { quantity: 1, total: a.price });
			});
		})
	}

	// shopProducts(){
	//   this.shop.viewShopProducts().subscribe((res)=> {
	//     console.log(res);
	//     this.productList = res;

	//   })

	// }

	addToCart(product: any) {
		this.shopDetail.addToCart(product);

		//Function for total cart count
		this.cartNumberFunc();
	}

	addToWishlist(products:any){
		let Data = JSON.parse(localStorage.getItem('wishData'));
		localStorage.removeItem('wishData')
		console.log(products);

		Data.push('products')
		localStorage.setItem('wishData', JSON.stringify(Data));
		this.shopDetail.addToWishlist(products);

		//Function for total wishlist count
		this.wishNumberFunc();
	}

	cartNumber:number = 0;
	cartNumberFunc(){
		var cartValue = JSON.parse(localStorage.getItem('productData')) ;
		this.cartNumber = cartValue.length;
		this.shopDetail.cartSubject.next(this.cartNumber);
		
	}

	wishNumber:number = 0;
	wishNumberFunc(){
		var wishValue = JSON.parse(localStorage.getItem('wishData'));
		this.wishNumber = wishValue.length;
		this.shopDetail.wishSubject.next(this.wishNumber);
		console.log(this.wishNumber);
		
	}


}
