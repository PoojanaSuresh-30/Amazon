import React, { Component } from "react";
import{ useDispatch, useSelector, type UseSelector } from "react-redux";
import type{ RootState } from "../app/store";
import { removeFromWishlist } from "../features/Signup/WishlistSlice";
import type{ Product } from "../features/Signup/types";
import './Wishlist.css';
import { RiDeleteBin6Line } from "react-icons/ri";



const Wishlist : React.FC = ()=>
{
   const wishlistitems = useSelector((state:RootState)=>state.wishlist.items);
   const dispatch =  useDispatch();
  

   const handleRemove = ( id : string)=>
   {
     dispatch(removeFromWishlist(id));

    


   }

        return(
            <section className="wishlist">
   <div className="wishlistitems">
<h4>Wishlist</h4>
                <span><button>Move all to Bag</button></span>
   </div>
                <div>
                    {wishlistitems.length === 0 ? (<p>Your Wishlist is Empty</p>)  :
                    (
                        <div className="wishlist-items">
                            {wishlistitems.map((product:Product)=>
                            (
                                <div key={product.id} className="wishlist-item">
                                    <img src={product.imageURL} alt={product.name} />
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>${product.price}</p>
                                        <button onClick={()=>handleRemove(product.id)}><RiDeleteBin6Line/></button>
                                    </div>
                                    </div>
                            ))}
                            </div>
                    )}
                </div>

            </section>
        )
    
};


export default Wishlist;