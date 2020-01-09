import { Customer } from '../types/customer.model';
import { Address } from '../types/address.model';
import { Logins } from './login-req.model';

export interface User {
    user: {
        customer: Customer;
        address: Address;
        logins: Logins;
    };
}
