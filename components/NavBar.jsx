import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.svg'


const NavBar = () => {
  return (
    <div className='navbar'>
       
        <div className='blogo'>
            <Link href='/'>
              <a>
                <Image
                    src={logo}
                    height={90}
                    width={300}
                />
              </a>
            </Link>
        </div>
        
        <div className='siggmaaadd'>
            
        </div>
    </div>
  )
}

export default NavBar