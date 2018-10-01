import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../../../models/shoppingCart';

@Component({
  selector: 'order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  @Input('cart') cart: ShoppingCart;
 

  constructor() { }

  ngOnInit() {
  }

}
