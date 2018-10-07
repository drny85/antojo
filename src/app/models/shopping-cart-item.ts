import { Product } from './product';


export class ShoppingCartItem {
  id?: string;
  name: string;
  picture: string;
  price: number; 
  addons?: string[];
  flavors?: string[];
  instruction?: string;
  quantity: number; 

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }


}