import { Action } from '@ngrx/store';

export enum EEventActions {
    ToggleLoading = 'Toggle Loading'
}

export class ToggleLoading implements Action {
    public readonly type = EEventActions.ToggleLoading;
    constructor(public payload: boolean) {}
}

export type EventActions =
    ToggleLoading
;
