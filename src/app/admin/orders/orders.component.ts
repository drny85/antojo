import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders$;
  orders: Order[] = [];
  status: string = 'All Orders';
  filteredStatus: Order[] = [];
  subscription: Subscription;
  checkNewOrder: boolean;

  constructor(private orderServ: OrderService, private activeRoute: ActivatedRoute, private msg: ToastrService) { 
    
  }

 async ngOnInit() {
  this.orders$ = (await this.orderServ.getAllOrders());
  this.populateOrders();
  this.orderServ.newOrder.subscribe(order => {this.checkNewOrder = order;
    console.log(this.checkNewOrder);
  })
  

  }

  private populateOrders() { 
   
   this.subscription = this.orderServ.getAllOrders().subscribe(orders => {
      this.orders = orders;
      this.activeRoute.queryParamMap.subscribe(params => {
        this.status = params.get('status');
        this.filteredStatus = (this.status) ?
          this.orders.filter(p => p.status === this.status) :
          this.orders;
      })
     
    });
   
 }

 

}
