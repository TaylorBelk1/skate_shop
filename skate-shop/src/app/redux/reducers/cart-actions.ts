import { CartActions, ECartActions } from '../actions/cart-actions';
import { Cart } from '../models/types/cart.model';
import { initCartState } from '../states/init-data-state';

export function cartReducer(
    state = initCartState,
    action: CartActions
): Cart {

    switch(action.type) {
        case ECartActions.CartItemsRecieved:
            return action.payload;

        case ECartActions.ClearCartItems:
            return state = initCartState;

        default:
            return state;
    }
}
