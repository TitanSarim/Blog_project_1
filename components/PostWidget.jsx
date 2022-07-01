import React,{useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() =>{
    if(slug){
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    }else{
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  // const style = {
  //   height:"60px"
  // }

  return (
    <div className='post-widget'>

      <div className='post-widget-h3'>
        <h3>
          {slug? 'Related Posts' : "Recent Posts"}
        </h3>
      </div>

        <div className='post-widget-border'></div>

      <div className='post-widget-content'>
        
        {relatedPosts.map((post) =>(

          <div key={post.title} className='post-widget-content2'>
            <div>
              <picture>
                <img 
                    src={post.featured.url} 
                    alt={post.title} 
                    // style={style}
                    className='post-widget-img'
                />
              </picture>
           </div>

            <div className='post-widget-text'>
              
              <div className='post-widget-p'>
                <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              </div>

              <div className='post-widget-link'>
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

export default PostWidget