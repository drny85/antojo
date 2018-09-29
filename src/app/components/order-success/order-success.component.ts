import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../models/order';
import { AdminOrderService } from '../../services/admin-order-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit, OnDestroy {

  order: Order;
  subscription: Subscription;

  constructor(private adminOrder: AdminOrderService, private activatedRoute: ActivatedRoute, private modalService: NgbModal) { }

  async ngOnInit() {
    let id = await this.activatedRoute.snapshot.params['id'];
    this.subscription = this.adminOrder.getOrder(id).subscribe(order => this.order = order );
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
