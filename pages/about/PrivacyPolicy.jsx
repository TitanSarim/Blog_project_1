import React from 'react'
import Link from 'next/link'

import {MdPrivacyTip} from 'react-icons/md'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

const PrivacyPolicy = () => {
  return (

    <div className='privacypolicy--service'>
      <div className='privacypolicy-conatiner'>

          <h1><MdPrivacyTip size={50}/>Privacy Policy</h1>

          <div className='privacypolicy-content'>
            <ul>
              <li>We may offer free and open source software, source code, brief lessons, forthcoming Merns Stack upgrades and technologies, as well as a problem-solving approach on this website.</li>
              <li>All levels of developers, including beginners, intermediate users, and experts, may learn from and explore this website. They can even copy code from it.</li>
              <li>Attention, The user and visitor must get our permission in order to duplicate our websites code and material and use it on their own websites under their own names.</li>
              <li>This is a 0.0.01 version of the website, and we continuously work to improve the theme, user interface, and user experience in order to improve the user experience and strengthen the relationship between the author and the user.</li>
            </ul>
          </div>

          <div className='privacypolicy-socail-icon'>
            <Link href='https://www.facebook.com/sarim.zahid.333/'>
              <a target="_blank"><FaFacebookF size={31}/></a>
            </Link>

            <Link href='https://www.instagram.com/sarim2696/'>
              <a target="_blank"><FaInstagram size={31}/></a>
            </Link>

            <Link href='https://www.linkedin.com/in/muhammad-sarim-679576212'>
              <a target="_blank"><FaTwitter size={31}/></a>
            </Link>

            <Link href='https://twitter.com/SarimXahid'>
              <a target="_blank"><FaLinkedin size={31}/></a>
            </Link>
          </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy