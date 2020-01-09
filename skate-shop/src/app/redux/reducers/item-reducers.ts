import { ItemActions, EItemActions } from '../actions/item-actions';
import { ItemResponse } from '../models/responses/item-res.model';
import { initItemState } from '../states/init-data-state';

export function itemReducer(
    state = initItemState,
    action: ItemActions
): ItemResponse {

    switch(action.type) {
        case EItemActions.SetItemState:
            console.log('from item reducer:', action.payload)
            return action.payload;

        case EItemActions.ClearItems:
            return state = initItemState;

        default:
            return state;
    }
}
