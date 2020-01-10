import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../redux/models/state-models/app-state.model';
import { Subscription, Observable } from 'rxjs';
import { ToggleLoading } from '../redux/actions/event-actions';
import { Item } from '../redux/models/types/items.model';
import { getAllItems, getSingleItem } from '../redux/selectors/item-selector';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
// tslint:disable: radix
// tslint:disable: curly
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  mainSub: Subscription;
  item: Item;
  baseUrl: string;
  specs: string[];
  quantity: number;

  constructor(
    public store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.mainSub = new Subscription();
    this.quantity = 12;
  }

  ngOnInit() {
    this.toggleLoading(true);
    this.baseUrl = environment.baseUrl;

    const tempId = parseInt(this.route.snapshot.paramMap.get('id'));
    const itemSub = this.store.select(getSingleItem, tempId)
      .subscribe(res => {
        this.item = res;
        if(res) this.specs = this.handleSplitSpecs(res.specs);
      });

    this.handleAddToSubList([itemSub]);

    if (this.item !== null || this.item !== undefined) {
      this.toggleLoading(false);
    }
  }

  handleSplitSpecs = (str: string) => {
    const temp = str.split('| ');
    temp.forEach(i => i.replace('|', ''));
    return temp;
  }

  handleIncreaseCounter() {
    return this.quantity++;
  }

  handleDecreaseCounter() {
    if (this.quantity !== 0) this.quantity--;
  }

  handleAddToSubList(list: Subscription[]) {
    list.forEach(l => this.mainSub.add(l));
  }

  toggleLoading = (bool: boolean) => {
    this.store.dispatch(new ToggleLoading(bool));
  }

  handleGoBack = () => {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.mainSub.unsubscribe();
  }

}
