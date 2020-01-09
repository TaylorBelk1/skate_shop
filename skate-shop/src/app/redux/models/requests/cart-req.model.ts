export interface CartRequest {
    item : {
        cart_id: number;
        product_id: number;
        quantity: number;
    };
}
