import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/shopping-pages/checkout/checkout.component';
import { ShoppingCartComponent } from './pages/shopping-pages/shopping-cart/shopping-cart.component';
import { ShoppingPagesComponent } from './pages/shopping-pages/shopping-pages.component';

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
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }