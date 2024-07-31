export interface User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    type: number;
    token: string; 
    firstName?: string;
    lastName?: string;
    state?: string;
    street?: string;
    zipcode?: string;

}

export interface Address {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
}