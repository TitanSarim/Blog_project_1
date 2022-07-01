import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {SiFiverr} from 'react-icons/si'
import {FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

const Author = ({author}) => {

  const style = {
    borderRadius: '50%',
  }

  return (
    <div className='desc-author-box'>
      <div className='desc-author-box2'>

        <div className='desc-author-img'>

            <Image
                alt={author.name}
                unoptimized
                height="130px"
                width="130px"
                src={author.photo.url} 
                style={style} 
            />

        </div>

        <h3>{author.name}</h3>
        <p>{author.bio}</p>

        <div className='author-freelancing'>

          <Link href="https://www.fiverr.com/sarimxahid" target="_blank">
                <a target="_blank">
                <SiFiverr size={29}/>
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

          <Link href="https://www.instagram.com/sarim2696/">
                <a target="_blank">
                <FaInstagram size={29}/>
                </a>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Author