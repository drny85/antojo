import { async } from '@angular/core/testing';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Order } from '../../../models/order';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit  {

  id: string
  order;
  orders: Order[] = [];
  userId: string;
  

  constructor(private activedRoute: ActivatedRoute, private orderServ: OrderService, private auth: UsersService) { 

     this.id = this.activedRoute.snapshot.params['id'];
     this.order =  auth.user.pipe(map(u => u.id));

    }

   async ngOnInit() {

     let id =  await this.auth.user.pipe(map(u => u.id));
     console.log(id);
    }


}