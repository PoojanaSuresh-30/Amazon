import React, { Component } from 'react';
import './Footer.css';
import { SiMinutemailer } from "react-icons/si";
import Qrcode from '../../assets/images/Qrcode.jpg';
import Googleplay from '../../assets/images/GooglePlay.svg';
import AppleStore from '../../assets/images/AppleStore.svg';
import { BiLogoFacebook } from "react-icons/bi";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

class Footer extends Component {
  state = {}

  render() {
    return (
      <section className='footer'>
        <div className='elements'>
            <div className='exclusive'>
             <h3>Exclusive</h3>
             <p>Subscribe</p>
             <h5>Get 10% off your first order</h5>
             <div className='email'>
              <input type="text" placeholder='Enter your email' />
              <SiMinutemailer className='emailicon'/>
             </div>
            </div>

            <div className='support'>
              <h4>Support</h4>
            <ul>
              <li>111 Bijoy sarani, Dhaka,</li>
              <li>DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
            </div>

            <div className='Account'>
              <h4>Account</h4>
              <ul>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            
            </div>

            <div className='QuickLink'>
             <h4>Quick Link</h4>
             <ul>
              <li>Privacy policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
             </ul>
            </div>

            <div className='DownloadApp'>
              <h4>Download App</h4>
            <p>Save $3 with App New User Only</p>

            <div className='download'>
              <div className='qrcode'>
              <div>

                <img src={Qrcode} alt="qrcode" />

              </div>

              <div>

                <div>
                 <img src={Googleplay} alt="googleplay" />

                </div>
                <div>
                 <img src={AppleStore} alt="apple" />
                </div>

              </div>

            </div>

            </div>

            <div className='socialmedia'>
             <ul>
              <li><BiLogoFacebook/></li>
              <li><TfiTwitter/></li>
              <li><FaInstagram/></li>
              <li><FaLinkedinIn/></li>
             </ul>
            </div>
            
            </div>

        </div>


      </section>
    )
  }
}

export default Footer