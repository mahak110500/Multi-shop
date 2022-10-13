import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  featuredData:any = [];

  constructor(private home:HomePageService, private shopDetail:ShopDetailService) { }

  ngOnInit(): void {
    this.featuredProducts();

  }

  featuredProducts(){
    this.home.viewFeaturedProducts().subscribe((res)=> {
      console.log("successful!");
      
      this.featuredData = res;

      this.featuredData.forEach((a:any)=> {
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
