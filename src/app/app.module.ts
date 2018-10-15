import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AddonsService } from './services/addons.service';

import { AdminOrderService } from './services/admin-order-service.service';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginsService } from './services/logins/logins.service';
import { UsersService } from './services/users/users.service';

import { environment } from './../environments/environment';
import { AppRoutesModule } from './routing/app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyordersComponent } from './components/myorders/myorders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CustomFormsModule } from 'ng2-validation'
import { AngularFireStorageModule } from 'angularfire2/storage';
import { EditComponent } from './admin/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatIconModule, MatBadgeModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { OrderService } from './services/order.service';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { AdminOrderDetailsComponent } from './admin/admin-order-details/admin-order-details.component';
import { DeliveryConfirmationComponent } from './components/delivery-confirmation/delivery-confirmation.component';
import { OrderReviewComponent } from './components/shopping-cart-summary/order-review/order-review.component';
import { ManageAddonsComponent } from './admin/manage-addons/manage-addons.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ManageFlavorComponent } from './admin/manage-flavor/manage-flavor.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    ProductsComponent,
    AdminProductsComponent,
    OrdersComponent,
    MyordersComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductFormComponent,
    EditComponent,
    FooterComponent,
    DataTableComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailsComponent,
    AdminOrderDetailsComponent,
    DeliveryConfirmationComponent,
    OrderReviewComponent,
    ManageAddonsComponent,
    ManageCategoryComponent,
    MyprofileComponent,
    ManageFlavorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    CustomFormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'antojitos-chef'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatBadgeModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireAuthModule, MatTableModule, MatPaginatorModule, MatSortModule


  ],
  providers: [{provide: LocationStrategy , useClass: HashLocationStrategy},LoginsService, UsersService, AuthGuard, AdminAuthGuard, ProductService, CategoryService, ShoppingCartService, OrderService, AdminOrderService, AddonsService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
