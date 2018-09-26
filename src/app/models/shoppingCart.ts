
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
}