import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
	public products: any = [];


  constructor(private shopDetail:ShopDetailService) { }

  ngOnInit(): void {

    this.shopDetail.getWishData().subscribe((res: any) => {
			this.products = res;  //array of products getting added to cart

		})
  }

}
