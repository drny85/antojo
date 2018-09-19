import { Product } from './product';

export class ShoppingCart {
    id?: string;
    items: Product[];
    quantity: number;

    get totalItemsCount() {
        let count = 0;
        for ( let productId in this.items)
            count += this.items[productId].quantity;
        return count;
    }

}