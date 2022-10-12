import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ShopDetailService {


    product: any;
    products:any;
    public cartItemList: any = [];
    public productList = new BehaviorSubject<any>([]);

    public wishList:any = [];
    public wishlistItem = new BehaviorSubject<any>([]);

    cartSubject = new Subject<any>();

    constructor(private http: HttpClient) { }

    //Get Product Data
    getProductData() {
        return this.productList.asObservable();
    }

    //Get Wishlist Data
    getWishData(){
        return this.wishlistItem.asObservable();
    }

    //Set Product Data
    setProductData(product: any) {
        console.log(product);
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    //Set wishlist Data
    setWishData(products:any){
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
        console.log(this.Cartdata);

        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(this.cartItemList));

    }


    addToWishlist(products: any) {
        console.log(products);

        this.wishList.push(products);
        this.wishlistItem.next(this.wishList);

        console.log(this.wishList);
        console.log(this.wishlistItem);

    }


    removeCartItem(product: any, data) {
        data.map((a: any, index: any) => {
            if (product.id == a.id) {
                data.splice(index, 1);
            }
        })
        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(data));

        console.log(data);

        return data;

    }

    onCheckout(data: any) {

        const headers = new HttpHeaders({ 'myHeader': 'procademy' });

        return this.http.post('http://localhost:3000/shoppingCart', data, { headers: headers }).subscribe((res) => {
            console.log(res);

        })
    }

    // totalItemsCount(products: any) {
    //     console.log(products);

    //     this.productCount = 0;

    //     const totalCount = products.filter((product: any) => {
    //         this.productCount = +this.productCount + +product.quantity
    //     })
    //     console.log(this.productCount);

    //     this.emitQty.next(this.productCount);

    // }



}