import React from 'react'
import {useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories} from '../services'


const Categories = ({slug}) => {


  const [categories, setCategories] = useState([])


  useEffect (() =>{

    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });

  }, [])
  //========================================================
  return (

    <div className='categories'>

      <h3 >
        Categories
      </h3>

      {categories.map((category, index)=>(

        <Link key={index} href={`/category/${category.slug}`}>

          <span className="category-name">
            {category.name}
          </span>

        </Link>
      ))}

    </div>

  );
}
// 
export default Categories;