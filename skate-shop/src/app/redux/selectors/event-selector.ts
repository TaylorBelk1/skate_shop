import { createSelector } from '@ngrx/store';
import { AppState } from '../models/state-models/app-state.model';
import { EventState } from '../models/state-models/event-state.model';

const getEventState = (state: AppState) => state.eventState;

export const getAllEvents = createSelector(
    getEventState,
    (state: EventState) => state
);

export const loadingStatus = createSelector(
    getEventState,
    (state: EventState) => state.isLoading
);

