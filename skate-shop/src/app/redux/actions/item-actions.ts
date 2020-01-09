import { Action } from '@ngrx/store';
import { ItemResponse } from '../models/responses/item-res.model';

export enum EItemActions {
    RetrieveItems = 'Items Received',
    SetItemState = 'Set Item State',
    ClearItems = 'Clear Items'
}

export class RetrieveItems implements Action {
    public readonly type = EItemActions.RetrieveItems;
}

export class SetItemState implements Action {
    public readonly type = EItemActions.SetItemState;
    constructor(public payload: ItemResponse) {}
}

export class ClearItems implements Action {
    public readonly type = EItemActions.ClearItems;
}

export type ItemActions =
    RetrieveItems |
    ClearItems |
    SetItemState
;
