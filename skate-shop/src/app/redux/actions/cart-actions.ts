import { Action } from '@ngrx/store';
import { Cart } from '../models/types/cart.model';

export enum ECartActions {
    CartItemsRecieved = 'Cart Items Received',
    ClearCartItems = 'Clear Cart Items',
    AddToCart = 'Add Item To Cart'
}

export class CartItemsRecieved implements Action {
    public readonly type = ECartActions.CartItemsRecieved;
    constructor(public payload: Cart) {}
}

export class ClearCartItems implements Action {
    public readonly type = ECartActions.ClearCartItems;
}

export class AddToCart implements Action {
    public readonly type = ECartActions.AddToCart;
    constructor(public payload: Cart) {}
}


export type CartActions =
    CartItemsRecieved |
    ClearCartItems |
    AddToCart
;
