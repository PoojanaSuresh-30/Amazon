import { ADD_TO_CART,REMOVE_FROM_CART,type RemovefromCartAction,type AddtoCartAction } from "./cartActionTypes";


export const addTocart = (productId : number, name : string, price : number, imageURL : string,quantity : number =1):AddtoCartAction =>(
    {
        type :ADD_TO_CART,
        payload : {productId,name,price,imageURL,quantity},
    }
);


export const removeFromcart = (productId : number ):RemovefromCartAction => (
    {
        type : REMOVE_FROM_CART,
        payload : {productId},
    }
);


