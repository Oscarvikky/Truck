import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Nav = () => {
  return (
    <>
    <section className='nav-main'>
     <div className='nav-left'>
         <div>
          <p className='call'>call 0999.887.88</p>
         </div>
         <div>
           <p>
info@725tc.com</p>
         </div>
     </div>

     <div className='nav-right'>
      <span><FaInstagram /></span>
      <span><FaLinkedinIn /></span>
      <span><FaFacebookF /></span>
      <span className='avatar'><RxAvatar /></span>
      <span>Log in</span>
     </div>

      
    </section>
    <br />
    <hr />
    </>
  )

}

export default Nav