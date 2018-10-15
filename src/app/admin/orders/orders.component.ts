import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { count } from 'rxjs/operators';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @ViewChild('audioFile') audioFile: ElementRef;

  orders$;
  orders: Order[] = [];
  status: string = 'All Orders';
  filteredStatus: Order[] = [];
  subscription: Subscription;
  checkNewOrder: boolean;
  count: number = 0;

  constructor(private orderServ: OrderService, private activeRoute: ActivatedRoute, private msg: ToastrService) { 
    
  }

 async ngOnInit() {
  this.orders$ = (await this.orderServ.getAllOrders());
  this.populateOrders();

  }

  private populateOrders() { 

  
   
    this.subscription = this.orderServ.getAllOrders().subscribe(orders => {

      this.orders = orders;
      this.activeRoute.queryParamMap.subscribe(params => {
        this.status = params.get('status');
        this.filteredStatus = (this.status) ?
          this.orders.filter(p => p.status === this.status) :
          this.orders;
      })
      this.count = 0;
      orders.filter(order => {

        if (order.status === 'new') {
          this.count += 1;

        }

      }

      );

      if (this.count > 0) {
        this.msg.show('You have ' + this.count + ' new orders', 'NEW ORDER');
        console.log(this.audioFile.nativeElement);
        (<HTMLAudioElement>this.audioFile.nativeElement).play();
        setTimeout(() => (<HTMLAudioElement>this.audioFile.nativeElement).play(), 2100);


        if (this.count < 1) {
          this.msg.show('There is no New Orders', 'NO ORDERS');
        }

      }

    })


  }



}
