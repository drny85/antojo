
import { UsersService } from './../../services/users/users.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  id: string;
  orders$;
  oneOrder;
  subscription: Subscription;
 
  closeResult: string;

  constructor(private orderServ: OrderService, 
    private authServ: UsersService, 
    private modalService: NgbModal) { 
    

      // this.oneOrder = this.orderServ.getOrderByUser(this.id);
      // console.log(this.oneOrder);
      
  }

 async ngOnInit() {

 this.subscription = (await this.authServ.user.subscribe(u => {

    if (u.id) {

    this.orders$ =  this.orderServ.getOrderByUser(`${u.id}`);

    }
  
  }))
}

 

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }

}
