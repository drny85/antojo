import { ShoppingCart } from './../../models/shoppingCart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import {  Observable } from 'rxjs';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  
  cart$: Observable<ShoppingCart>;
 
 
  constructor( private shoppingCartServ: ShoppingCartService) { }

  async ngOnInit() {
   
    this.cart$ = (await this.shoppingCartServ.getCart());
    
  }


}
