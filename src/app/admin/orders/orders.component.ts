import { OrderService } from './../../services/order.service';
import { Order } from './../../models/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders$;

  constructor(private orderServ: OrderService) { 
    this.orders$ = this.orderServ.getAllOrders();
  }

 

}
