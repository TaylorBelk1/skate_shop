import { createSelector } from '@ngrx/store';
import { AppState } from '../models/state-models/app-state.model';
import { Cart } from '../models/types/cart.model';

const getCartState = (state: AppState) => state.cartState;

export const getAllCartItems = createSelector(
    getCartState,
    (state: Cart) => state
);
