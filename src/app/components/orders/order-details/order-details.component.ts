import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  id: string;
  order$;
  order: Order[] = [];
  

  constructor(private activedRoute: ActivatedRoute, private orderServ: OrderService, private auth: UsersService) { 

    this.id = this.activedRoute.snapshot.params['id'];
    this.auth.user.subscribe(user => {
      if (user) {
        this.orderServ.getOrderByUser(user.id).subscribe(order => this.order =order);
        this.order.filter(res => res.items[0].product.id === this.id);
        
      }
    })

    
   
  }


}
