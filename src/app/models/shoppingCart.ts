
import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart { 
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap:  ShoppingCartItem[] ) {
    this.itemsMap = itemsMap || [];
    
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item));
    }
  }

  getQuantity(product: Product) {
   
     return product.quantity;
      
      
  }


  
  get totalPrice() {
    let sum = 0;
    for (let productId in this.items) 
      sum += this.items[productId].totalPrice;
    return sum;
  }

  get cartTotalPrice() {
    let sum = 0;
    let total = 0;
    for (let productId in this.items) 
      sum += this.items[productId].totalPrice;
      total +=sum;
    return total;
  }
  
  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) 
      count += this.items[productId].quantity;
    return count;
  }

  get numberSold() {
    let count = 0;
    for ( let i in this.items) {
      count += this.items[i].quantity;
      return count;
    }
  }

 get randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 20);
}
}