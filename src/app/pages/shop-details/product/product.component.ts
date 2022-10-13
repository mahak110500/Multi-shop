import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShopDetailService } from 'src/app/services/shop-detail.service';
import { ShopService } from 'src/app/services/shop.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	productArr:any = [];


  constructor(private shopDetail:ShopDetailService, private shop:ShopService) { }

  ngOnInit(): void {
	
	// this.shop.viewShopProducts().subscribe((res) => {
	// 	this.productList = res;

	// 	this.productList.forEach((a: any) => {
	// 		Object.assign(a, { quantity: 1, total: a.price });
	// 	});
	// })

	this.shopDetail.viewShopDetail().subscribe((res)=> {
		this.productArr = res;

		this.productArr.forEach((a:any)=> {
			Object.assign(a, {quantity:1, total: a.price})
			
		  });
	})
  }

  customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: false,
		pullDrag: true,
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		navSpeed: 700,
		navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 1
			},
			940: {
				items: 1
			}
		},
		nav: true
	}


  inc(prod){
	console.log(prod);
	console.log(prod.qnt);
	
	
	if(prod.qnt != 6){
		prod.qnt+= 1;
	}
  }

  dec(prod){
	console.log(prod.qnt);
	
	if(prod.qnt != 1){
		prod.qnt-= 1;
	}
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
