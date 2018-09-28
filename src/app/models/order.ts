import { ShoppingCart } from "./shoppingCart";
import { OrderItems } from "./order-items";
import { Shipping } from './shipping';

export class Order {
    id?: string;
    datePlaced: string;
    grandTotal: number;
    items: OrderItems[];
    status: string

    constructor(public userId: string, public shipping: Shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().toLocaleString();
        this.grandTotal = shoppingCart.cartTotalPrice;
        this.status = 'new';
        this.items = shoppingCart.items.map(i => {
            return {
                
                
                product: {
                    id: i.id,
                    name: i.name,
                    price: i.price,
                    picture: i.picture,
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
                
                
            }
        })
    }

    

}