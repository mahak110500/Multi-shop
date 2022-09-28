import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderFirstComponent } from './common/header/header-first/header-first.component';
import { HeaderSecondComponent } from './common/header/header-second/header-second.component';
import { HeaderThirdComponent } from './common/header/header-third/header-third.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { FeaturedProductComponent } from './pages/home/featured-product/featured-product.component';
import { SpecialOfferComponent } from './pages/home/special-offer/special-offer.component';
import { RecentProdComponent } from './pages/home/recent-prod/recent-prod.component';
import { VendorsComponent } from './pages/home/vendors/vendors.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductsComponent } from './pages/shop/products/products.component';
import { SidebarComponent } from './pages/shop/sidebar/sidebar.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ProductComponent } from './pages/shop-details/product/product.component';
import { ProductDescriptionComponent } from './pages/shop-details/product-description/product-description.component';
import { ProductSliderComponent } from './pages/shop-details/product-slider/product-slider.component';
import { ShoppingPagesComponent } from './pages/shopping-pages/shopping-pages.component';
import { ShoppingCartComponent } from './pages/shopping-pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/shopping-pages/checkout/checkout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    HeaderThirdComponent,
    PagesComponent,
    HomeComponent,
    BannerComponent,
    CategoriesComponent,
    FeaturedProductComponent,
    SpecialOfferComponent,
    RecentProdComponent,
    VendorsComponent,
    ShopComponent,
    ProductsComponent,
    SidebarComponent,
    ShopDetailsComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ProductSliderComponent,
    ShoppingPagesComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
