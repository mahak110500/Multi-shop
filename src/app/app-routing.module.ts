import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './common/header/header-first/order-history/order-history.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/shopping-pages/checkout/checkout.component';
import { PaymentComponent } from './pages/shopping-pages/payment/payment.component';
import { ShoppingCartComponent } from './pages/shopping-pages/shopping-cart/shopping-cart.component';
import { ShoppingPagesComponent } from './pages/shopping-pages/shopping-pages.component';
import { SuccessComponent } from './pages/shopping-pages/success/success.component';
import { WishlistComponent } from './pages/shopping-pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop-details',
    component: ShopDetailsComponent
  },
  {
    path: 'shopping-pages',
    component: ShoppingPagesComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
