import React,{Component} from "react";
import './Navbar2.css';
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import Badge, { type BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/IconButton';
import{ useDispatch, useSelector, type UseSelector } from "react-redux";
import type{ RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";




const Navbar2 : React.FC = () => {
   const wishlistitems = useSelector((state:RootState)=>state.wishlist.items) || [];
   const cartItem = useSelector((state:RootState)=>state.cart.items) || [];
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

    return (
      
      <section className='navbar'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
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
<button className="account">< RiAccountCircleFill className="userProfile" /></button>

        </div>
      </div>

      <hr />


      </section>
    )
  };

export default Navbar2;
