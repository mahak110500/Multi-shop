import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ShopDetailService {
    product: any;
    public cartItemList: any = [];
    public productList = new BehaviorSubject<any>([]);


    constructor(private http: HttpClient) { }

    //Get Product Data
    getProductData() {
        return this.productList.asObservable();
    }

    //Set Product Data
    setProductData(product: any) {
        console.log(product);
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

     //setting add to cart products to local storage
    //  saveCart(){
    //     localStorage.setItem('productData', JSON.stringify(this.cartItemList));
    // }

    //getting add to cart products from localstorage
    // loadCart(){
    //     this.cartItemList = JSON.parse(localStorage.getItem('productData') as any) || [];
    // }

    //Add to Cart
    // Cartdata = []

    addToCart(product: any) {

        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        // this.saveCart();

        // this.Cartdata.push(product);
        // console.log(this.Cartdata);
        

        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(this.cartItemList));

        this.getTotalPrice();
    }

   

    addToWishlist(product: any) {
        console.log(product);

        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);

    }

    getTotalPrice(): number {
        let grandTotal = 0;
        this.cartItemList.map((a: any) => {
            console.log(a);
            grandTotal = a.total;
        })
        console.log(grandTotal);

        return grandTotal;
    }

    removeCartItem(product: any, data) {
        data.map((a: any, index: any) => {
            if (product.id == a.id) {
                data.splice(index, 1);
            }
        })
        localStorage.removeItem('productData');
        localStorage.setItem('productData', JSON.stringify(data));


        // this.cartItemList.map((a: any, index: any) => {
        //     if (product.id == a.id) {
        //         this.cartItemList.splice(index, 1);
        //     }
        // })
        // this.productList.next(this.cartItemList);
    }






}