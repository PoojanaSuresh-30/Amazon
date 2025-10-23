import React from "react";
import './Navbar2.css';
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import Badge, { type BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/IconButton';
import{ useDispatch, useSelector} from "react-redux";
import type{ RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { clearAuthData, logout } from "../../features/Signup/logincredentialsSlice";
import { resetForm } from "../../features/Signup/signupSlice";






const Navbar2 : React.FC = () => {
   const wishlistitems = useSelector((state:RootState)=>state.wishlist.items) || [];
   const cartItem = useSelector((state:RootState)=>state.cart.items) || [];
   const dispatch = useDispatch();
    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const navigate = useNavigate();
const handletopage = () =>
{
navigate('/wishlist');
}

const handletocartpage = () =>
{
  navigate('/cart');
}
const handletologout = () =>
{
  dispatch(logout());
  dispatch(resetForm())
  dispatch(clearAuthData());

}
const handletoprofile = () =>
{
  console.log("hi")
  navigate('/profile');
}

    return (

      
      <section className='navbar'>
    
      <div className='header'>

        <div className='summer'>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;  <a href="">ShopNow</a>
        </div>

        <div className='english'>
         <select name="Language" id="">
            <option value="English">English</option>
            <option value="Kannada">ಕನ್ನಡ</option>
            <option value="Telugu">తెలుగు</option>
            <option value="Tamil">தமிழ்</option>
            <option value="Hindi">हिन्दी</option>
         </select>
        </div>
      </div>

      <div className='navbar1'>
          <h3>Exclusive</h3>
        <div className='links'>
       
         <ul>
          <li><a href="./home">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About</a></li>
            <li><a href="/signup" className='active'>Signup</a></li>
         </ul>
        </div>

        <div className='search'>
        <search>
  <form>
     <input name="search" id="search" placeholder="What are you looking for?" />
    {/* <IoIosSearch /> */}
   
    
  </form>
</search>





<Button aria-label="cart" className="wishlist" onClick={handletopage}>
      <StyledBadge badgeContent={wishlistitems.length} color="secondary">
        < FaRegHeart className="heart" />
      </StyledBadge>
    </Button>
    <Button aria-label="cart" className="cart" onClick={handletocartpage}>
      <StyledBadge badgeContent={cartItem.length} color="secondary">
        <TiShoppingCart className="cartshop"/>
      </StyledBadge>
    </Button>



<div className="dropdown">
  <button className="dropbtn" onClick={handletoprofile}>< RiAccountCircleFill className="userProfile" /></button>
  <div className="dropdown-content">
    <a href="#"><RiAccountPinCircleLine className="drop"/>&nbsp;&nbsp;Manage My Account</a>
    <a href="#"><FiShoppingBag className="drop"/>&nbsp;&nbsp;My Order</a>
    <a href="#"><IoCloseCircleOutline className="drop"/>&nbsp;&nbsp;My Cancellations</a>
    <a href="">< IoIosStarOutline className="drop"/>&nbsp;&nbsp;My Reviews</a>
    <a href="/signup"><BiLogOutCircle className="drop" onClick={()=>handletologout}/>&nbsp;&nbsp;Logout</a>
  </div>
</div>

        </div>
      </div>

      <hr />


      </section>
    )
  };

export default Navbar2;
