import { Item } from '../types/items.model';
import { Category } from '../types/category.model';

export interface ItemResponse {
    item: Item[];
    categories: Category[];
}
