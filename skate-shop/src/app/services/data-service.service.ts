import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ItemResponse } from '../redux/models/responses/item-res.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/models/state-models/app-state.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  items: ItemResponse;
  itemsUrl: string;

  constructor(private http: HttpClient, public store: Store<AppState>) {
    const { baseUrl } = environment;

    this.itemsUrl = `${baseUrl}items`;
  }

  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getItems = (): Observable<ItemResponse> => {
    console.log('running get items')
    return this.http.get<ItemResponse>(this.itemsUrl, this.headerOptions);
  }

}
