export interface Product {
    id?: string,
    name: string,
    price: number,
    category: string,
    picture: string,
    addons?: object,
    updated: string,
    quantity: number
}