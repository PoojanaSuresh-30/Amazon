import React, { Component } from "react";
import{ useDispatch, useSelector, type UseSelector } from "react-redux";
import type { AppDispatch } from '../../app/store';
import type{ RootState } from "../../app/store";
import type { CartItem } from "../../app/cartReducer";
import { RiDeleteBin6Line } from "react-icons/ri";
import { reduceFromcart, removeFromcart } from "../../app/CartActions";
import './Cart.css';
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";



const CartPage : React.FC = () =>
{
 
const cartItems = useSelector((state:RootState)=>state.cart.items);
  
const dispatch = useDispatch<AppDispatch>();

const handleremovefromcart = (id : number)=>
{
        dispatch(removeFromcart(id));
    console.log(`${id} removed from cart`);
    
}

const handlereducefromcart = (id : number,quantity : number)=>
{
    if(quantity === 0)
   {
      dispatch(removeFromcart(id));
   }
   else{
dispatch(reduceFromcart(id,quantity));
   }
    
   
    console.log(`reduced 1 item of product_id ${id}`);
    
}

    return(
        <section className="cartpage">
            <div className="cartitems">

                <h4>Cart({cartItems.length})</h4>

                <div>

                    {cartItems.length === 0 ? (<p>Your cart is empty</p>) : 
                    (
                        <div className="cart-items">
                            {cartItems.map((cartitem : CartItem)=>
                            (
                                <div key={cartitem.productId} className="wishlist-item">
                                    <img src={cartitem.imageURL} alt={cartitem.name} />
                                    <div>
                                        <h3>{cartitem.name}</h3>
                                        <p>${cartitem.price?.toFixed(2) ?? "0.00"}</p>
                                        <p>quantity : {cartitem.quantity}</p> 
                                        {/* <button onClick={()=>handleaddtocart(cartitem.productId,cartitem.quantity)} className="removefromcart">< AiOutlineMinus className="delete"/></button>
                                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
                                        <button onClick={()=>handlereducefromcart(cartitem.productId,cartitem.quantity)} className="removefromcart">< AiOutlineMinus className="delete"/></button>
                                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                                        <button onClick={()=>handleremovefromcart(cartitem.productId)} className="removefromcart"><RiDeleteBin6Line className="delete"/></button>
                                                              
                                                               </div>
                                                               </div>

                            ))}

                        </div>
                    )}
                    
                </div>
                <center className="subtotal"><p>Subtotal : </p></center>
                <br /><br /><br /><br />
                <center> <button className="checkout">Checkout</button></center>


            </div>
         
        </section>
    )
};
export default CartPage;
