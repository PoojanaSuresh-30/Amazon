import  { Component } from 'react';
import './Navbar.css';





class Navbar extends Component {


  render() {
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
          <li><a href="">Home</a></li>
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
        </div>
      </div>

      <hr />


      </section>
    )
  }
}

export default Navbar;