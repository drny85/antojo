export interface OrderItems {

    product: {
        id?: string,
        name: string,
        price: number,
        picture: string,
        quantity?: number,
        addons?: object,
        instruction: string
    },
    quantity: number,
    totalPrice: number
}