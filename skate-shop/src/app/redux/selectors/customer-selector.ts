import { createSelector } from '@ngrx/store';
import { AppState } from '../models/state-models/app-state.model';
import { LoginResponse } from '../models/responses/login-res.model';

const getCustomerState = (state: AppState) => state.customerState;

export const getAllCustomerInfo = createSelector(
    getCustomerState,
    (state: LoginResponse) => state
);
