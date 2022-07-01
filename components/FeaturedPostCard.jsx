import React,{useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import {MdOutlineFeaturedVideo} from 'react-icons/md'
import { getFeaturedPosts} from '../services';

const FeaturedPostCard = ({categories, slug}) => {

const [FeaturedPosts, setFeaturedPosts] = useState([]);

// const style = {
//     height:"360px"
//   }

  useEffect(() =>{
    if(slug){
        getFeaturedPosts(categories, slug)
      .then((result) => setFeaturedPosts(result))
    }else{
        getFeaturedPosts()
      .then((result) => setFeaturedPosts(result))
    }
  }, [slug])

  return (
    <div className='featured-post'>

        <h3>
            <MdOutlineFeaturedVideo size={35}/>
            Featured
        </h3>


    <div className='featured-posts-align'>
      
      {FeaturedPosts.map((post) =>(

        <div key={post.title} className='featured-posts-align2'>
          <div>
              <img 
                  src={post.featured.url} 
                  alt={post.title}  
                  // style={style}  
                  className='featuredPosts-img'
              />
              
         </div>

          <div className='featured-posts-content'>
            
            <div className=''>
              <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            </div>

            <div className='featured-posts-content-title'>
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div> 

          </div>


        </div>
      
    ))}

    </div>
  </div>
  )
}

export default FeaturedPostCard