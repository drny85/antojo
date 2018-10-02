export interface Product {
    id?: string,
    name: string,
    price: number,
    category: string,
    picture: string,
    addons?: object,
    instruction?: string;
    updated: string,
    quantity: number
}