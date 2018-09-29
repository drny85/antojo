import { DeliveryConfirmationComponent } from './../../components/delivery-confirmation/delivery-confirmation.component';
import { AdminOrderDetailsComponent } from './../../admin/admin-order-details/admin-order-details.component';
import { OrderDetailsComponent } from './../../components/orders/order-details/order-details.component';
import { EditComponent } from './../../admin/edit/edit.component';
import { ProductFormComponent } from './../../admin/product-form/product-form.component';
import { CheckOutComponent } from './../../components/check-out/check-out.component';
import { AuthGuard } from './../../guards/auth-guard.service';
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
import { AdminGuard } from '../../guards/admin-guard.service';



const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  
  { path: 'products', component: ProductsComponent },
  { path: 'products/:prodId', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'order-success/:id', component: OrderSuccessComponent , canActivate: [ AuthGuard ] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard ] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard] },
  { path: 'delivered', component: DeliveryConfirmationComponent, canActivate: [ AuthGuard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [ AuthGuard ] },
  { path: 'admin/products/:id', component: EditComponent, canActivate: [ AuthGuard ] },
  { path: 'admin/orders/details/:id', component: AdminOrderDetailsComponent, canActivate: [ AuthGuard ] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuard ]},
  { path: 'admin/orders', component: OrdersComponent , canActivate: [ AuthGuard] },
  { path: 'myorders', component: MyordersComponent , canActivate: [ AuthGuard ]},
  { path: 'myorders/detail/:id', component: OrderDetailsComponent , canActivate: [ AuthGuard ]},
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
