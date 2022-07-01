import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import { getRecentPosts } from '../services';

import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const Header = ({categories, slug}) => {

    const showDate= new Date();
    const displayTodaysDate = showDate.getDate()+', '+(showDate.getMonth()+1)+', '+showDate.getFullYear();
    const dt=showDate.toDateString();

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() =>{
      if(slug){
        getRecentPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
      }else{
        getRecentPosts()
        .then((result) => setRelatedPosts(result))
      }
    }, [slug])

  return (
    
    <div className='conatiner'>

        <div className='trend'>
            Trending
        </div>

        <div className='trendnws'>
            {relatedPosts.map((post) =>(
               <Link href={`/post/${post.slug}`} key={post.title}>
                 <p className="trennewd-post">
                 {post.title}
                 {' | '}
                 </p>
               </Link>
            ))}
        </div>
        
        <div className='headdate'>
            {dt}
        

            <div className='divider'>
                
            </div>

            <div className='headicons'>
              <Link href='https://www.facebook.com/sarim.zahid.333/'>
                <a target="_blank"><FaFacebookF size={20} className='headicon1'/></a>
              </Link>
                
              <Link href='https://twitter.com/SarimXahid'>
                <a target="_blank"><FaTwitter size={21} className='headicon1'/></a>
              </Link>
              
              <Link href='https://www.instagram.com/sarim2696/'>
                <a target="_blank"><FaInstagram size={22} className='headicon1'/></a>
              </Link>
                
            </div>
        
        </div> 

    </div>
  )
}

export default Header