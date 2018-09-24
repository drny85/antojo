export interface User {
    id?: string,
    name?: string,
    last_name?: string,
    phone?: string,
    email?: string,
    password?: string,
    isAdmin: boolean,
    address: {
        address: string,
        apt?: string,
        city: string,
        state: string,
        zipcode: string
    }
}