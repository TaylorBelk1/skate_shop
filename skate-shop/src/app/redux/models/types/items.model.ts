export interface Item {
    id: number;
    category_id: number;
    name: string;
    price: number;
    description: string;
    specs: string;
    item_id?: number;
    image_name?: string;
    image_url?: string;
}
