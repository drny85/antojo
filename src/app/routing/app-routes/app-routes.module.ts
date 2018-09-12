import { LoginComponent } from './../../components/login/login.component';
import { RegisterComponent } from './../../components/register/register.component';
import { NotfoundComponent } from './../../components/notfound/notfound.component';
import { MyordersComponent } from './../../components/myorders/myorders.component';
import { OrdersComponent } from './../../admin/orders/orders.component';
import { AdminProductsComponent } from './../../admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './../../components/order-success/order-success.component';
import { ShoppingCartComponent } from './../../components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { ProductsComponent } from '../../components/products/products.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-orders', component: OrdersComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: '**', component: NotfoundComponent }

]

@NgModule({

  exports: [ RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class AppRoutesModule { }
