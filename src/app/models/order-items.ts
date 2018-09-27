export interface OrderItems {

    product: {
        id?: string,
        name: string,
        price: number,
        picture: string
    },
    quantity: number,
    totalPrice: number
}