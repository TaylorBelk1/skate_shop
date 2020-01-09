import { Item } from '../types/items.model';
import { Cart } from '../types/cart.model';
import { EventState } from './event-state.model';
import { LoginResponse } from '../responses/login-res.model';
import { ItemResponse } from '../responses/item-res.model';

export interface AppState {
    itemState: ItemResponse;
    customerState: LoginResponse;
    cartState: Cart;
    eventState: EventState;
}
