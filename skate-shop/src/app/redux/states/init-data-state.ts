import { ItemResponse } from '../models/responses/item-res.model';
import { LoginResponse } from '../models/responses/login-res.model';
import { Cart } from '../models/types/cart.model';
import { EventState } from '../models/state-models/event-state.model';
import { Item } from '../models/types/items.model';

export const initItemState: ItemResponse = {
    item: [],
    categories: []
};

export const initCustomerState: LoginResponse = {
    message: '',
    customer: null,
    address: null,
    username: null,
    cartId: null,
    shoppingCart: [],
    token: null
};

export const initCartState: Cart = {
    info: {
        id: null,
        cart_id: null,
        product_id: null,
        quantity: null
    },
    items: []
};

export const initEventState: EventState = {
    isLoading: false
};
