import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  data:any;
  cartTotal!: any;
  public payPalConfig?: IPayPalConfig;
  showSuccess! : any;

  constructor(private router:Router) { }

  ngOnInit(): void {

    //for storing shopping-cart data
    this.data = JSON.parse(localStorage.getItem('productData')as any) || [];
    console.log(this.data);
    

    //for storing shoppin-cart amount
    this.cartTotal = JSON.parse(localStorage.getItem('cart_total') as any) || [];
    // console.log(this.cartTotal);

    
    this.initConfig();

  }


  private initConfig(): void {
    console.log(this.cartTotal);
    console.log(this.data);
    
    
    // paypal_sdk.Buttons().render('#paypal-button-container');
    this.payPalConfig = {
    currency: 'EUR',
    clientId: `${environment.client_ID}`,
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: `${this.cartTotal}`,
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: `${this.cartTotal}`
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: `${this.cartTotal}`,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },

    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      if(data.status === 'COMPLETED'){
        this.router.navigate(['/success'])
      }
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  
  }

}
