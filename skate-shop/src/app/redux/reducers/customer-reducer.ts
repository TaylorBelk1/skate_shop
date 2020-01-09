import { CustomerActions, ECustomerActions } from '../actions/customer-actions';
import { LoginResponse } from '../models/responses/login-res.model';
import { initCustomerState } from '../states/init-data-state';

export function customerReducer(
    state = initCustomerState,
    action: CustomerActions
): LoginResponse {

    switch(action.type) {
        case ECustomerActions.CustomerDataReceived:
            return action.payload;

        case ECustomerActions.CustomerDataReceived:
            return state = initCustomerState;

        default:
            return state;
    }
}
