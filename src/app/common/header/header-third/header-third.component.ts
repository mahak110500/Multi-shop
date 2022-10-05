import { Component, OnInit } from '@angular/core';
import { ShopDetailService } from 'src/app/services/shop-detail.service';
@Component({
	selector: 'app-header-third',
	templateUrl: './header-third.component.html',
	styleUrls: ['./header-third.component.css']
})
export class HeaderThirdComponent implements OnInit {

	public totalItem: number = 0;
	public wishlistItem: number = 0;
	constructor(private shopDetail: ShopDetailService) { }

	ngOnInit(): void {
		this.shopDetail.getProductData().subscribe((res) => {
			this.totalItem = res.length;
		})
		
		// this.shopDetail.getProductData().subscribe((result) => {
		// 	this.wishlistItem = result.length;
		// })

	}


}
