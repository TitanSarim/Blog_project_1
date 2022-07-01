import React from 'react'
import {useState, useEffect } from 'react'
import Link from 'next/link'
import {BiCategory} from 'react-icons/bi'

import { getCategories} from '../services'

const HeadCategories = ({slug}) => {


  const [categories, setCategories] = useState([])


  useEffect (() =>{

    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });

  }, [])


  return (
    <div className='head-categories-main'>
      
      <div className='head-categories-h3'>
        <h3 >
          <BiCategory className='icon-category' size={24}/>
          Categories
        </h3>
      </div>

      {categories.map((category, index)=>(

        <Link key={index} href={`/category/${category.slug}`}>
            
          <span className="headCategories-list">
            <div className='headCategories-list2'>
            {category.name}
            </div>
          </span>

        </Link>
      ))}

    </div>
  )
}

export default HeadCategories;