import { Action } from '@ngrx/store';
import { LoginResponse } from '../models/responses/login-res.model';

export enum ECustomerActions {
    CustomerDataReceived = 'Customer Data Received',
    ClearCustomerData = 'Clear Customer Data'
}

export class CustomerDataReceived implements Action {
    public readonly type = ECustomerActions.CustomerDataReceived;
    constructor(public payload: LoginResponse) {}
}

export class ClearCustomerData implements Action {
    public readonly type = ECustomerActions.ClearCustomerData;
}

export type CustomerActions =
    CustomerDataReceived |
    ClearCustomerData
;
