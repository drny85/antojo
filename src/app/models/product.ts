export interface Product {
    id?: string,
    name: string,
    price: number,
    category: string,
    picture: string,
    addons?: string[]
    instruction?: string;
    updated: string,
    quantity: number
}