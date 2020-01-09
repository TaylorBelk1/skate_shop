import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/models/state-models/app-state.model';
import { Subscription } from 'rxjs';
import { Category } from '../redux/models/types/category.model';
import { getAllCategories } from '../redux/selectors/item-selector';
import { ToggleLoading } from '../redux/actions/event-actions';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css']
})
export class CategoriesBarComponent implements OnInit {
  mainSub: Subscription = new Subscription();
  categories: Category[];

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.toggleLoading(true);
    const categoriesSub = this.store.select(getAllCategories)
      .subscribe(res => {
        this.categories = res;
      });
    // tslint:disable-next-line: curly
    if (categoriesSub !== undefined) this.toggleLoading(false);

    this.handleAddToSubList([categoriesSub]);
  }

  handleAddToSubList(list: Subscription[]) {
    list.forEach(l => this.mainSub.add(l));
  }

  toggleLoading = (bool: boolean) => {
    this.store.dispatch(new ToggleLoading(bool));
  }

}
