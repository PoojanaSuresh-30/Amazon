import React from "react";
import { useState,useEffect } from "react";
import './HomePage.css';
import HomePagebg from '../../assets/images/HomePagebg.svg';
import rectangle from '../../assets/images/Rectangle 18.svg';
import frame1 from '../../assets/images/Frame1.svg';
import frame2 from '../../assets/images/Frame2.svg';
import frame3 from '../../assets/images/Frame3.svg';
import frame4 from '../../assets/images/Frame4.svg';
import frame5 from '../../assets/images/Frame5.svg';
import frame6 from '../../assets/images/Frame6.svg';
import frame7 from '../../assets/images/Frame7.svg';
import frame8 from '../../assets/images/frame8.svg';
import frame9 from '../../assets/images/Frame9.svg';
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import type { AppDispatch } from '../../app/store';
import{ useDispatch} from "react-redux";
import { addtoWishlist } from "../../features/Signup/WishlistSlice";
import { addTocart } from "../../app/CartActions";
import type{ CartItem } from "../../app/cartReducer";
import type{ Product } from "../../features/Signup/types";


const HomePage : React.FC = () =>
{ 
    const dispatch = useDispatch<AppDispatch>();
    //  const navigate = useNavigate();
        const countdownDate : Date = new Date("October 29, 2025 15:50:00");
        const [timeLeft, setTimeLeft] = useState(
            {
                days : 0,
                hours : 0,
                minutes : 0,
                seconds : 0,   
            }
        );

    

    const handleAddtowishlist = (product : Product) =>
    {
        dispatch(addtoWishlist(product));
        
    }

    const handleaddtocart = (cart : CartItem)=>
    {
        dispatch(addTocart(cart.productId,cart.name, cart.price, cart.imageURL));
    }


    useEffect(()=>
    {
   const Interval = setInterval(()=>
        {
            const now : number = new Date().getTime();
            const distance : number = countdownDate.getTime() - now;
                 if (distance>0)
                 {
     const days : number = Math.floor(distance / (1000*60*60*24));
            const hours : number = Math.floor(distance % (1000*60*60*24)/ (1000*60*60));
            const minutes : number = Math.floor(distance % (1000*60*60)/(1000*60*60));
            const seconds : number = Math.floor(distance % (1000*60)/(1000));
                    setTimeLeft({ days, hours, minutes, seconds });
                 }
            else{
                clearInterval(Interval);
                setTimeLeft({days : 0, hours:0, minutes:0, seconds :0 });
            }
        },1000);
    }, [countdownDate])        
        return(
            <section className="homepage">

                <div className="iphone">
                    <div>
                     <img src={HomePagebg} alt="homePagebg" className="bg"/>
                    </div>
                </div>

                <div className="flashsale">
                    <div>
                
                    <div className="sales">
                        <img src={rectangle} alt="rectangle" /><p className="sale">Today's</p>
                        <br />
                    </div>
                    <h4>Flash Sale</h4>
                    </div>     
                    <div className="countdown">
                           <ul className="timervalue">
                        <li>Days</li>
                        <li>Hours</li>
                        <li>Minutes</li>
                        <li>Seconds</li>
                    </ul>

                    <ul className="timer">
                        <li>{timeLeft.days}</li>
                        <li className="dots">:</li>
                        <li>{timeLeft.hours}</li>
                        <li className="dots">:</li>
                        <li>{timeLeft.minutes}</li>
                        <li className="dots">:</li>
                        <li>{timeLeft.seconds}</li>
                    </ul>

                    </div>

                    <div className="arrows">
                           <MdOutlineArrowCircleLeft className="arrow1"/>
                <MdOutlineArrowCircleRight className="arrow2"/>

                    </div>
                    
                </div>

                <div className="products">

                    <div className="productFeature">
                        <img src={frame1} alt="" />
                        <p>HAVIT HV-G92 Gamepad</p>
                        <p  className="rupees">$120 <span><s>$160</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
                        <br />
                        <br />
                        <button onClick={()=> handleaddtocart({
                            productId : 1,
                            name : "HAVIT HV-G92 Gamepad",
                            price : 120,
                            imageURL : frame1,
                            quantity : 1,

                        })}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist({
                           id : 1,  
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        imageURL: frame1,
                        })}>
                            < FaHeart className="fea"/>
                            </button>
                    </div>

                      <div className="productFeature">
                        <img src={frame2} alt="" />
                        <p>S-Series Comfort Chair </p>
                        <p  className="rupees">$375 <span><s>$400</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart({
                             productId : 2,
                            name : "S-Series Comfort Chair",
                            price : 375,
                            imageURL : frame2,
                            quantity : 1,
                        })}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist(
                            {
       id : 2,  
        name: "S-Series Comfort Chair",
        price: 375,
        imageURL: frame2,
                        }
                        )}>< FaHeart className="fea"/></button>

                    </div>

                      <div className="productFeature">
                        <img src={frame3} alt="" />
                        <p>IPS LCD Gaming Monitor</p>
                        <p  className="rupees"> $370 <span><s>$400</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart({
                               productId : 3,
                            name : "IPS LCD Gaming Monitor",
                            price : 370,
                            imageURL : frame3,
                            quantity : 1,
                        })}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist({
                            id : 3,
                            name : "IPS LCD Gaming Monitor",
                            price : 370,
                            imageURL : frame3,
                        })}>< FaHeart className="fea"/></button>

                    </div>

                      <div className="productFeature">
                        <img src={frame4} alt="" />
                        <p>AK-900 Wired Keyboard</p>
                        <p  className="rupees">$960 <span><s>$1160</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart({
                             productId : 4,
                            name : "AK - 900 Wired Keyboard",
                            price : 960,
                            imageURL : frame4,
                            quantity : 1,
                        })}> <BsCart4/></button> <button onClick={()=>
                            handleAddtowishlist({
                                id : 4,
                                name : "AK - 900 Wired Keyboard",
                                price : 960,
                                imageURL : frame4,
                            })
                        }>< FaHeart className="fea"/></button>

                    </div>

                      <div className="productFeature">
                        <img src={frame5} alt="" />
                        <p>ASUS FHD Gaming Laptop</p>
                        <p  className="rupees">$960 <span><s>$1160</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart(
                            {
                                  productId : 5,
                            name : "ASUS FHD Gaming Laptop",
                            price : 960,
                            imageURL : frame5,
                            quantity : 1,
                            }
                        )}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist(
                            {
                                id : 5,
                                name : "ASUS FHD Gaming Laptop",
                                price : 960,
                                imageURL : frame5,
                            }
                        )}>< FaHeart className="fea"/></button>

                    </div>

                      <div className="productFeature">
                        <img src={frame6} alt="" />
                        <p>Quilted Satin Jacket</p>
                        <p  className="rupees">$300 <span><s>$600</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart(
                            {
                                 productId : 6,
                            name : "Quilted Satin Jacket",
                            price : 300,
                            imageURL : frame6,
                            quantity : 1,
                            }
                        )}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist(
                            {
                                id : 6,
                                name :"Quilted Satin Jacket",
                                price : 300,
                                imageURL : frame6,
                            }
                        )}>< FaHeart className="fea"/></button>

                    </div>

                    <div className="productFeature">
                        <img src={frame7} alt="" />
                        <p>GP11 Shooter USB Gamepad</p>
                        <p  className="rupees">$500 <span><s>$850</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart(
                            {
                                productId : 7,
                            name : "GP11 Shooter USB Gamepad",
                            price : 500,
                            imageURL : frame7,
                            quantity : 1,
                            }
                        )}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist({
                            id : 7,
                            name : "GP11 Shooter USB Gamepad",
                            price : 500,
                            imageURL  : frame7,
                        })}>< FaHeart className="fea"/></button>

                    </div>
                    <div className="productFeature">
                        <img src={frame8} alt="" />
                        <p>RGB liquid CPU Cooler</p>
                        <p  className="rupees">$400 <span><s>$520</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart(
                            {
                                 productId : 8,
                            name : "RGB Liquid CPU cooler",
                            price : 400,
                            imageURL : frame8,
                            quantity : 1,
                            }
                        )}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist({
                            id : 8,
                            name : "RGB Liquid CPU cooler",
                            price : 400,
                            imageURL : frame8,
                        })}>< FaHeart className="fea"/></button>

                    </div>
   <div className="productFeature">
                        <img src={frame9} alt="" />
                        <p>Gucci duffle bag</p>
                        <p className="rupees">$800 <span><s>$1160</s></span></p>
                        <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/>   <GoStarFill className="star"/> <span>(88)</span>
<br />
                        <br />
                        <button onClick={()=>handleaddtocart(
                            {
                                 productId : 9,
                            name : "Gucci duffle bag",
                            price : 800,
                            imageURL : frame9,
                            quantity : 1,
                            }
                        )}> <BsCart4/></button> <button onClick={()=>handleAddtowishlist({
                            id : 9,
                            name : "Gucci duffle bag",
                            price : 800,
                            imageURL : frame9,
                        })}>< FaHeart className="fea"/></button>

                    </div>

                </div>

                <div>
                    <center style={{padding:60}}>
                        <button  className="view">View All Products</button>
                    </center>
                </div>
                <hr />
            </section>
        )
    }

export default HomePage;


