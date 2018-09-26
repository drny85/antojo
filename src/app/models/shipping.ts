export interface Shipping {
    name: string,
    last_name: string,
    address: {
        address: string,
        apt?: string,
        city: string,
        state: string,
        zipcode: string
    },
    phone: string,
    email: string
}