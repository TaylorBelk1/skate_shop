import { Action } from '@ngrx/store';
import { Cart } from '../models/types/cart.model';

export enum ECartActions {
    CartItemsRecieved = 'Cart Items Received',
    ClearCartItems = 'Clear Cart Items'
}

export class CartItemsRecieved implements Action {
    public readonly type = ECartActions.CartItemsRecieved;
    constructor(public payload: Cart) {}
}

export class ClearCartItems implements Action {
    public readonly type = ECartActions.ClearCartItems;
}


export type CartActions =
    CartItemsRecieved |
    ClearCartItems
;
