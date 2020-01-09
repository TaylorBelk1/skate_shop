import { DataService } from '../../services/data-service.service';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { RetrieveItems, EItemActions, SetItemState } from '../actions/item-actions';
import { Observable } from 'rxjs';

@Injectable()
export class ItemEffects {
    constructor(
        private actions: Actions,
        private dataService: DataService
    ) {}

    // set the state of items
    @Effect()
    setItemData: Observable<Action> = this.actions.pipe(
        ofType<RetrieveItems>(EItemActions.RetrieveItems),
        switchMap(() => {
            return this.dataService
                .getItems()
                .pipe(map(data => new SetItemState(data)));
        }),
    );


}