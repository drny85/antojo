import { ShoppingCart } from "./shoppingCart";
import { OrderItems } from "./order-items";
import { Shipping } from './shipping';

export class Order {
    id?: string;
    datePlaced: string;
    grandTotal: number;
    items: OrderItems[];
    status: string;
    delivered: boolean;
    numberSold: number

    constructor(public userId: string, public shipping: Shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().toLocaleString();
        this.grandTotal = shoppingCart.cartTotalPrice;
        this.status = 'new';
        this.id = shoppingCart.randomId;
        this.items = shoppingCart.items.map(i => {
            return {
                
                
                product: {
                    id: shoppingCart.randomId,
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