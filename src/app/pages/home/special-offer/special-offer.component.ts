import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit {
	offersData:any = [];


  constructor(private home:HomePageService) { }

  ngOnInit(): void {
    this.offerSection();
  }

  offerSection(){
    console.log("successful!");
    
		this.home.viewSpecialOffers().subscribe((result) => {
			console.log(result);
			this.offersData = result;
		})
	}


}
