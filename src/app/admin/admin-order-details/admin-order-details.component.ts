import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { AdminOrderService } from './../../services/admin-order-service.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../models/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit, OnDestroy {

  order: Order;
  subscription: Subscription;
  status: string = '';

  constructor(private adminOrders: AdminOrderService, 
    private route: ActivatedRoute, 
    private location: Location,
    private router: Router,
    private message: ToastrService,
    private modalService: NgbModal) {

   }

 async ngOnInit() {
  let id = await this.route.snapshot.params['id'];
  this.subscription = this.adminOrders.getOrder(id).subscribe(order => { this.order = order; console.log(this.order); })
  console.log(this.status);
  }

  goBack() {
    this.location.back();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  changeStatus(e) {
  
    if(e) {
      if(e.status === 'delivered') {

        this.order.delivered = true;
      }
      this.order.status = this.status
      this.adminOrders.updateOrder(this.order).then(() => this.message.success("UPDATED!", "Order has been updated") ) ;
    
    }

    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
