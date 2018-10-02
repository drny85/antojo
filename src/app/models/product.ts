export interface Product {
    id?: string,
    name: string,
    price: number,
    category: string,
    picture: string,
    addons?: [string],
    updated: string,
    quantity: number
}