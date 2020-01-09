import { Item } from './items.model';

export interface Cart {
    info: {
        id: number;
        cart_id: number;
        product_id: number;
        quantity: number;
    },
    items: Item[];
}
