import React from 'react'
import { IoMdClock } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { PiVanThin } from "react-icons/pi";

const Hero4 = () => {
  return (
    <div>
        <section className='hero4'>
           <div className='hero4-drive'><h3>725 DRIVING CAREERS</h3></div>
           <div className='hero4-down'>
            <div>
                <span><IoMdClock /></span> <br />
                <h2>
FLEXIBLE SCHEULE</h2> <br />
                <p>Earn Money On Your Schedule <br /> <br />

Drive with 725 and set a schedule that <br /> aligns with your life. A flex schedule <br /> allows part-time employees to earn <br /> money when it's convenient, and also <br /> gives full time employees the <br /> opportunity to earn extra overtime. <br />  Our hours are set- but you can work 2-5 <br /> days a week. 

</p>
            </div>
            <div>
                 <span><FaCheck /></span> <br />
                <h2>BENEFITS</h2> <br />
                <p>We Take Care Of Our Own <br /> <br />

Our employees get access to amazing <br /> benefits - including health, vision, <br /> dental and accident insurance, 401k  <br /> (with Company matching), more than <br /> $5,000/year in tuition assistance for  <br />full-time team members, and Paid <br /> Time Off (PTO).  We provide all drivers <br /> with a 2019 or newer delivery van, all <br /> equipment and uniforms needed to be <br /> successful.  No long haul deliveries, all <br /> stops are local. You'll be home every  <br />night. 

</p>
            </div>
            <div>
                 <span><PiVanThin /></span> <br />
                <h2>ON-THE-JOB TRAINING</h2> <br />
                <p>Get Support To Grow Your Career <br /> <br />

We welcome people with wide ranges <br /> of experiences and skills! (Must be 21) <br /> All you really need is a great attitude <br /> and willingness to learn.   We provide all <br /> the training and equipment you need, <br /> along with opportunities to grow your <br /> skills and leadership experience.</p>
            </div>
           </div>

        </section>

    </div>
  )
}

export default Hero4