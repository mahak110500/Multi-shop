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
		console.log(products );
		this.shopDetail.addToWishlist(products);
	}

	cartNumber:number = 0;
	cartNumberFunc(){
		var cartValue = JSON.parse(localStorage.getItem('productData')) ;
		this.cartNumber = cartValue.length;
		this.shopDetail.cartSubject.next(this.cartNumber);
		
	}

	


}
