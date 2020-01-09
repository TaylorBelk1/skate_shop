import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/models/state-models/app-state.model';
import { RetrieveItems } from '../redux/actions/item-actions';
import { loadingStatus } from '../redux/selectors/event-selector';
import { Subscription } from 'rxjs';
import { ToggleLoading } from '../redux/actions/event-actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  loading: boolean;
  mainSub: Subscription = new Subscription();

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    const loadingSub = this.store.select(loadingStatus)
      .subscribe(res => this.loading = res);

    this.handleAddToSubList([
      loadingSub,
    ]);

    this.store.dispatch(new RetrieveItems());
  }

  handleAddToSubList(list: Subscription[]) {
    list.forEach(l => this.mainSub.add(l));
  }

  toggleLoading = (bool: boolean) => {
    this.store.dispatch(new ToggleLoading(bool));
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }
}
