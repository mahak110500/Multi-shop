import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
	selector: 'app-recent-prod',
	templateUrl: './recent-prod.component.html',
	styleUrls: ['./recent-prod.component.css']
})
export class RecentProdComponent implements OnInit {
	recentData: any = [];

	constructor(private home: HomePageService,private shopDetail:ShopDetailService) { }

	ngOnInit(): void {
		this.recentProducts();
	}

	recentProducts() {
		this.home.viewRecentProducts().subscribe((res) => {
			this.recentData = res;

			this.recentData.forEach((a:any)=> {
				Object.assign(a, {quantity:1, total: a.price})
			  });
		})
	}

	addToCart(product: any) {
		this.shopDetail.addToCart(product);

		//Function for total cart count
		this.cartNumberFunc();
	}

  cartNumber:number = 0;
	cartNumberFunc(){
		var cartValue = JSON.parse(localStorage.getItem('productData')) ;
		this.cartNumber = cartValue.length;
		this.shopDetail.cartSubject.next(this.cartNumber);
		
	}



}
