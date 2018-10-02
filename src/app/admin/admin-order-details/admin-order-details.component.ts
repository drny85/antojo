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
  showDetails: boolean = false;
  buttonDetailsText = 'Show Order Instructions';

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

  // check delivered status
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

  // change butto text
  showDetailsClicked(e) {
    this.showDetails = !this.showDetails;
    let text = e.target.innerText as string;
  
    if (text.toLowerCase() === 'show order instructions' ) {
      this.buttonDetailsText = 'Show Order Details';
    } else {
      this.buttonDetailsText = 'Show Order Instrucions';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
