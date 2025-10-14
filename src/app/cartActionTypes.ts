export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export interface AddtoCartAction
{
    type : typeof ADD_TO_CART;
    payload : { productId : number, name : string, price : number, imageURL : string,quantity : number };
}

export interface RemovefromCartAction
{
    type : typeof REMOVE_FROM_CART;
    payload : {productId : number};
}


export type CartActionTypes = AddtoCartAction | RemovefromCartAction ;