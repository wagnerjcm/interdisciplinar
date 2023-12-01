import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TelaSellerComponent } from './tela-seller/tela-seller.component';
import { TelaUserComponent } from './tela-user/tela-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BtnLoginComponent } from './btn-login/btn-login.component';
import { TelaPaymentComponent } from './tela-payment/tela-payment.component';
import { TelaConfirmedComponent } from './tela-confirmed/tela-confirmed.component';
@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    LandingpageComponent,
    TelaUserComponent,
    TelaSellerComponent,
    ProductListComponent,
    BtnLoginComponent,
    TelaPaymentComponent,
    TelaConfirmedComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
