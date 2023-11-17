import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TelaSellerComponent } from './tela-seller/tela-seller.component';
import { TelaUserComponent } from './tela-user/tela-user.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path: '', component: LandingpageComponent
  },
  {
    path: 'login', component: TelaLoginComponent
  },
  {
    path: 'user', component: TelaUserComponent
  },
  {
    path: 'seller', component: TelaSellerComponent
  },
  {
    path: 'market', component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
