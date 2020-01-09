import {
    initItemState,
    initCustomerState,
    initCartState,
    initEventState
} from './init-data-state';
import { AppState } from '../models/state-models/app-state.model';

export const initAppState: AppState = {
    itemState: initItemState,
    customerState: initCustomerState,
    cartState: initCartState,
    eventState: initEventState
};

export function getAppState(): AppState {
    return initAppState;
}
