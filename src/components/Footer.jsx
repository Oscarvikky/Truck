import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <section className='footer'>
            <div className='footer-soc'>
                  <span><FaInstagram /></span>
                      <span><FaLinkedinIn /></span>
                      <span><FaFacebookF /></span>
            </div> <br /> <br />
            <p>©2019 by 725 Transportation Company.</p>
        </section>

    </div>
  )
}

export default Footer