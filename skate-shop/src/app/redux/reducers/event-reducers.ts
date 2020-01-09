import { EventActions, EEventActions } from '../actions/event-actions';
import { EventState } from '../models/state-models/event-state.model';
import { initEventState } from '../states/init-data-state';

export function eventReducer(
    state = initEventState,
    action: EventActions
): EventState {

    switch(action.type) {
        case EEventActions.ToggleLoading:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
}
