import{ createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type{ wishlistItem,wishlistState } from './types';



const initialState : wishlistState = 
{
  items : [],
}


const wishlistSlice =  createSlice({
    name : 'wishlist',
    initialState,
    reducers : 
    {
        addtoWishlist : (state, action : PayloadAction<wishlistItem>)=>
        {
       const existingItem = state.items.find(item => item.id === action.payload.id);
       if(!existingItem)
       {
        state.items.push(action.payload);
       }
        },
        removeFromWishlist : (state,action : PayloadAction <String>)=>
        {
         state.items = state.items.filter(item => item.id! === action.payload);
        },
    }
});


export const {addtoWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
