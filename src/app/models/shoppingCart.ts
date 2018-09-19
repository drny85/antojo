import { Product } from './product';

export interface ShoppingCart {
    id?: string,
    items: Product[];
    quantity: number

}