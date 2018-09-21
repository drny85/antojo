import { Product } from './product';

export interface ShoppingCart {
    id?: string;
    product: Product;
    quantity: number;

}