import { Order } from './../../models/order';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminOrderService } from '../../services/admin-order-service.service';

@Component({
  selector: 'delivery-confirmation',
  templateUrl: './delivery-confirmation.component.html',
  styleUrls: ['./delivery-confirmation.component.css']
})
export class DeliveryConfirmationComponent implements OnInit, OnDestroy {

  order: Order;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private adminOrders: AdminOrderService) { }

  async ngOnInit() {
    let id = await this.route.snapshot.params['id'];
    this.subscription = this.adminOrders.getOrder(id).subscribe(order => { this.order = order; console.log(this.order);
     })
     
    }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

}
