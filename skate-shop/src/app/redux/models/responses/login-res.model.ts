import { Customer } from '../types/customer.model';
import { Address } from '../types/address.model';
import { CartInfo } from '../types/cart-info.model';
import { Item } from '../types/items.model';

export interface LoginResponse {
    message: string;
    customer: Customer;
    address: Address;
    username: string;
    cartId: CartInfo;
    shoppingCart: Item[];
    token: string;
}
