export interface OrderItems {

    product: {
        id?: string,
        name: string,
        price: number,
        picture: string,
        addons?: object
    },
    quantity: number,
    totalPrice: number
}