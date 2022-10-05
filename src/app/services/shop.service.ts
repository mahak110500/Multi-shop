import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
  })
  export class ShopService {
  
    constructor(private http:HttpClient) { }
  
    viewShopProducts(){
        return this.http.get('http://localhost:3000/shop-products');
    }
  }