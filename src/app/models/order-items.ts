export interface OrderItems {

    product: {
        name: string,
        price: number,
        picture: string
    },
    quantity: number,
    totalPrice: number
}