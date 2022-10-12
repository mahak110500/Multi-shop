import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ShopDetailService {

    product: any; //Add to Cart
    products: any; //Add to Wishlist

    public cartItemList: any = [];
    public productList = new BehaviorSubject<any>([]);

    public wishList: any = [];
    public wishlistItem = new BehaviorSubject<any>([]);

    cartSubject = new Subject<any>(); //For add to cart count
    wishSubject = new Subject<any>(); //For add to wishlist count

    constructor(private http: HttpClient) { }

    //Get Product Data
    getProductData() {
        return this.productList.asObservable();
    }

    //Get Wishlist Data
    getWishData() {
        return this.wishlistItem.asObservable();
    }

    //Set Product Data
    setProductData(product: any) {
        console.log(product);
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    //Set wishlist Data
    setWishData(products: any) {
        console.log(products);
        this.wishList.push(...products);
        this.wishlistItem.next(products);

    }

    //Add to Cart
    Cartdata = []

    addToCart(product: any) {

        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);

        // this.Cartdata.push(product);

        this.Cartdata = JSON.parse(localStorage.getItem('productData'));

        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(this.cartItemList));

    }

    //Add to wishlist
    WishData = []

    addToWishlist(products: any) {
        this.wishList.push(products); //array of products getting added to wishlist
        this.wishlistItem.next(this.wishList);

        this.WishData = JSON.parse(localStorage.getItem('wishData'));
        console.log(this.WishData);

        localStorage.removeItem('wishData');
        localStorage.setItem('wishData',JSON.stringify(this.wishList));

    }


    removeCartItem(product: any, data) {
        data.map((a: any, index: any) => {
            if (product.id == a.id) {
                data.splice(index, 1);
            }
        })
        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(data));

        return data;

    }

    removeWishItem(products:any, Data){
        Data.map((b:any, index:any) => {
            if(products.id == b.id){
                Data.splice(index,1)
            }
        })
        localStorage.removeItem('wishData');
        localStorage.setItem('wishData', JSON.stringify(Data));

        return Data;

    }

    onCheckout(data: any) {
        const headers = new HttpHeaders({ 'myHeader': 'procademy' });

        return this.http.post('http://localhost:3000/shoppingCart', data, { headers: headers }).subscribe((res) => {
            console.log(res);

        })
    }

}