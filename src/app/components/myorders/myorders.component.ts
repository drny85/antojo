import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';


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
    private modalService: NgbModal) { 
  
  
  }

async ngOnInit() {

   let userId = await localStorage.getItem('userId');
   this.subscription = this.orderServ.getUserId(userId).subscribe(order => this.orders = order);
   
}

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  
  }

}
