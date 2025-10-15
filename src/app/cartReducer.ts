import { ADD_TO_CART,REDUCE_FROM_CART,REMOVE_FROM_CART,type CartActionTypes } from "./cartActionTypes";



export interface CartItem
{
    productId : number;
    name : string;
    price : number;
    imageURL : string;
    quantity : number;
}


export interface CartState 
{
    items : CartItem[];
}

const initialState : CartState =
{
    items : [],
};


export const CartReducer  = (state = initialState , action : CartActionTypes): CartState =>
{
    switch(action.type)
    {
        case ADD_TO_CART:
            const existingItem = state.items.find(item => item.productId === action.payload.productId);
            if(existingItem)
            {
                return{
                    ...state,
                    items : state.items.map(item =>
                        item.productId === action.payload.productId
                        ? {...item,quantity : item.quantity + action.payload.quantity}
                        : item
                    ),
                };
            }

            return {
                ...state,
                items : [...state.items,action.payload],
            };

            case REMOVE_FROM_CART:
                return{
                    ...state,
                    items : state.items.filter(item => item.productId !== action.payload.productId),
                };

            case REDUCE_FROM_CART:
                return{
                    ...state,
                    items : state.items.map(item =>
                        item.productId === action.payload.productId
                        ? {...item,quantity : item.quantity - 1}
                        : item
                    )
                    
                }

                default : return state;
    }
};