import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import sarim from '../../assets/sarim.jpg'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const AboutUs = () => {
  return (
    
    <div className='aboutus-page-section'>

      <div className='aboutus-page-title'>
          <h1>About Us</h1>
      </div>

      <div className='aboutus-page-container'>

        <div className='aboutus-page-content'>
          <div className='aboutus-page-article'>
          <h3>Hello, My name is Sarim</h3>
          <h4>Iam a Software Engineer & a Mern Stack Web & APP developer</h4>
          <p>I use Mern Stack Technologies for Full stack web development. These are the latest technologies and easy-to-understand UI interfaces by users and these technologies provide excellent CMS Control systems. We can also provide Customer Services for Web & App design and Developemnt Data Analysis on different platforms Like  
              <a href="https://www.fiverr.com/sarimxahid" className='freelancing'> FIVERR</a>, 
              <a href="https://www.upwork.com/freelancers/~019fe47676528b73b6" className='freelancing'> UPWORK</a> &
              <a href="https://www.linkedin.com/in/muhammad-sarim-679576212" className='freelancing'> LINKEDIN</a>
            </p>
          </div>
        </div>

        <div className='aboutus-page-iamge-section'>
          <Image
            src={sarim}
            height='500px'
            width='500px'
            className='aboutus-page-iamge-section-image'
          />
        </div>
      </div>

      <div className='aboutus-page-social'>
          <Link href='https://www.facebook.com/sarim.zahid.333/'>
            <a target="_blank"><FaFacebookF size={31}/></a>
          </Link>

          <Link href='https://www.instagram.com/sarim2696/'>
            <a target="_blank"><FaInstagram size={31}/></a>
          </Link>

          <Link href='https://twitter.com/SarimXahid'>
            <a target="_blank"><FaTwitter size={31}/></a>
          </Link>

          <Link href='https://www.linkedin.com/in/muhammad-sarim-679576212'>
            <a target="_blank"><FaLinkedin size={31}/></a>
          </Link>

        </div>

    </div>

  )
}

export default AboutUs