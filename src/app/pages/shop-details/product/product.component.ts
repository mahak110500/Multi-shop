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
	public productList: any = [];


  constructor(private shopDetail:ShopDetailService, private shop:ShopService) { }

  ngOnInit(): void {
	
	this.shop.viewShopProducts().subscribe((res) => {
		this.productList = res;

		this.productList.forEach((a: any) => {
			Object.assign(a, { quantity: 1, total: a.price });
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

  

  productArr = [
	{
		productId: 1,
		qnt: 1,
		img: "./../../../../assets/img/product-1.jpg",
		name: "Product Name Goes Here",
		reviews: "99 Reviews",
		amt: "150.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 2,
		qnt: 1,
		img: "./../../../../assets/img/product-2.jpg",
		name: "Product Name Goes Here",
		reviews: "86 Reviews",
		amt: "200.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 3,
		qnt: 1,
		img: "./../../../../assets/img/product-3.jpg",
		name: "Product Name Goes Here",
		reviews: "98 Reviews",
		amt: "100.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 4,
		qnt: 1,
		img: "./../../../../assets/img/product-4.jpg",
		name: "Product Name Goes Here",
		reviews: "95 Reviews",
		amt: "120.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 5,
		qnt: 1,
		img: "./../../../../assets/img/product-2.jpg",
		name: "Product Name Goes Here",
		reviews: "86 Reviews",
		amt: "200.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 6,
		qnt: 1,
		img: "./../../../../assets/img/product-1.jpg",
		name: "Product Name Goes Here",
		reviews: "86 Reviews",
		amt: "200.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
	{
		productId: 6,
		img: "./../../../../assets/img/product-4.jpg",
		qnt: 1,
		name: "Product Name Goes Here",
		reviews: "86 Reviews",
		amt: "200.00",
		description: "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy",
	},
  ]

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

  addToCart(item:any){
	this.shopDetail.addToCart(item);
  }

  
}
