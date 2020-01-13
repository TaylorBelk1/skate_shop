import { ActionReducerMap } from '@ngrx/store';

import { cartReducer } from './reducers/cart-reducer';
import { customerReducer } from './reducers/customer-reducer';
import { eventReducer } from './reducers/event-reducers';
import { itemReducer } from './reducers/item-reducers';

import { AppState } from './models/state-models/app-state.model';

export const appReducers: ActionReducerMap<AppState> = {
    itemState: itemReducer,
    customerState: customerReducer,
    cartState: cartReducer,
    eventState: eventReducer
};


