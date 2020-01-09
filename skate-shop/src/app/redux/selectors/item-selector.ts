import { createSelector } from '@ngrx/store';
import { AppState } from '../models/state-models/app-state.model';
import { ItemResponse } from '../models/responses/item-res.model';

const getItemState = (state: AppState) => state.itemState;

export const getAllItems = createSelector(
    getItemState,
    (state: ItemResponse) => state.item
);

export const getAllCategories = createSelector(
    getItemState,
    (state: ItemResponse) => state.categories
);

