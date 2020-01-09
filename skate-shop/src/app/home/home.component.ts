import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/models/state-models/app-state.model';
import { ToggleLoading } from '../redux/actions/event-actions';
import { Subscription } from 'rxjs';
import { getAllItems } from '../redux/selectors/item-selector';
import { ItemResponse } from '../redux/models/responses/item-res.model';
import { Item } from '../redux/models/types/items.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  mainSub: Subscription = new Subscription();
  items: Item[];
  baseUrl: string;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.toggleLoading(true);
    this.baseUrl = environment.baseUrl;
    const sub = this.store.select(getAllItems).subscribe(res => {
      console.log(res)
      this.items = res;
    });

    if (this.items !== null || this.items !== undefined) {
        this.toggleLoading(false);
    }

    this.mainSub.add(sub);
  }

  toggleLoading = (bool: boolean) => {
    this.store.dispatch(new ToggleLoading(bool));
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }
}
