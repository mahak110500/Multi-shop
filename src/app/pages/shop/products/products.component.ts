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
	}

	addToWishlist(product:any){
		console.log(product);
		this.shopDetail.addToWishlist(product);
	}


}
