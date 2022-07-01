import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FaFacebookF, FaTwitter, FaInstagram,FaHome, FaLinkedinIn, FaSitemap} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {MdOutlineContactSupport, MdOutlinePolicy} from 'react-icons/md';
import {AiOutlineCopyrightCircle, AiOutlineTeam} from 'react-icons/ai'

import logo from '../assets/logo.svg'

const Footer = () => {

  const style ={
    gap:'10px',

  }

  return (
    <div className='footer'>

    <div className='up-footer'>

      <div className='bloogo'>
        <Link href={'/'}>
         <a> 
          <Image
            src={logo} 
            alt={logo}
            width={300}
            height={100}   
          />
          </a>
        </Link>

        <div className='social-micons'>
          <div className='footic'>

            <Link href="https://www.facebook.com/sarim.zahid.333/">
              <a target="_blank">
                <FaFacebookF size={29}/>
              </a>
            </Link>

            <Link href="https://www.instagram.com/sarim2696/">
              <a target="_blank">
              <FaInstagram size={29}/>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/muhammad-sarim-679576212">
              <a target="_blank">
              <FaLinkedinIn size={29}/>
              </a>
            </Link>
            
            <Link href="https://twitter.com/SarimXahid">
              <a target="_blank">
              <FaTwitter size={29}/>
              </a>
            </Link>
          </div>
        </div>

      </div>

      <div className='footer-pages'>
          <div className='footer-pages2'>
            <Link href="/">
              <a style={style}><FaHome size={24}/>Home</a>
            </Link>

            <Link href="/about/AboutUs">
              <a style={style}><AiOutlineTeam size={24}/>About Us</a>
            </Link>

            <Link href="/about/ContactUs">
              <a style={style}><MdOutlineContactSupport size={24}/>Contact Us</a>
            </Link>

            <Link href="/about/PrivacyPolicy">
              <a style={style}><MdOutlinePolicy size={24}/>Privacy Policy</a>
            </Link>

            <Link href="/about/SiteMap" >
              <a style={style}><FaSitemap size={24}/>Site Map</a>
            </Link>


          </div>
      </div>
      

      <div className='Subscribe-box'>
            <form action="#" className='footer-content'>
              <div className='footer-container'>
                <div className='email-box-icon'>
                  <i><IoIosMail/></i>
                </div>

                  <h1>Contact Us</h1>
                  <p>Send Us your Email for any Query or for Update.</p>
              </div>

              <div className='footer-input'>
                <label htmlFor="email"></label>
                <input type="email" placeholder='Your Email' />
                <button className='email-btn'>Email</button>
              </div>
            </form>
      </div>

      
      
    </div>  

    <div className='f-divider'>
    </div>

    <div className='footer-copyright-bar'>
      <div>
        <i>
          <AiOutlineCopyrightCircle size={24}/>
          <span>Copyright 2017</span>
          All Rights Reserved By 
          <a href="https://bbegy.com">
            Sarimxahid
          </a>
        
        </i>
      </div>
    </div>

    </div>
  )
}

export default Footer