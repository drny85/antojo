
import { UsersService } from './../../services/users/users.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { async } from '@angular/core/testing';
import { User } from '../../models/user';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  subscription: Subscription;
  closeResult: string;

  constructor(private orderServ: OrderService, 
    private authServ: UsersService, 
    private modalService: NgbModal) { 
  
  
  }

async ngOnInit() {

   let userId = await localStorage.getItem('userId');
   this.subscription = this.orderServ.getUserId(userId).subscribe(order => {this.orders = order; console.log(this.orders); });
   
 
}

 

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  
  }

}
