import React, { Component } from "react";
import{ useDispatch, useSelector, type UseSelector } from "react-redux";
import type{ RootState } from "../../app/store";
import { removeFromWishlist } from "../../features/Signup/WishlistSlice";
import type{ Product } from "../../features/Signup/types";
import './Wishlist.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { addTocart } from "../../app/CartActions";



const Wishlist : React.FC = ()=>
{
   const wishlistitems = useSelector((state:RootState)=>state.wishlist.items) || [];
   const dispatch =  useDispatch();
  

   const handleRemove = ( id : number)=>
   {
     dispatch(removeFromWishlist(id));
     console.log(`item of id ${id} removed`);
     
   }

   const handleaddtocart = (id : number,name : string, price : number,imageURL : string,quantity : number)=>
   {
    // @ts-expect-error
    dispatch(addTocart(id,name,price,imageURL,quantity));
    dispatch(removeFromWishlist(id));
   }

        return(
            <section className="wishlist">
   <div className="wishlistitems">
<h4>Wishlist({wishlistitems.length})</h4>
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
                                        <p>${product.price?.toFixed(2) ?? "0.00"}</p>
                                        <button onClick={()=>handleRemove(product.id)} className="remove-item"><RiDeleteBin6Line className="delete"/></button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                                        <button className="addtocart" onClick={()=>handleaddtocart(product.id,product.name,product.price,product.imageURL,1)}>Add to cart</button>
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