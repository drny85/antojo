import { ShoppingCart } from "./shoppingCart";
import { OrderItems } from "./order-items";
import { Shipping } from './shipping';

export class Order {
    datePlaced: string;
    items: OrderItems[];

    constructor(public userId: string, public shipping: Shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().toLocaleString();

        this.items = shoppingCart.items.map(i => {
            return {
                product: {
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