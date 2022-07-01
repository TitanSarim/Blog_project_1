import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {

    const style = {
        borderRadius: '20px', 
    }

  return (
    <div className='post-card'>
        {/* image */}

        <div className='card-img'>
            <picture>
                <img src={post.featured.url} 
                    alt={post.title}
                    style={style }
                    className="card-img-2"
                />
            </picture>     
        </div>

    {/* heres hydration error */}
        <h1 className='post-title'>
            <Link href={`/post/${post.slug}`}>
                {post.title}
            </Link>
        </h1>

        <div className="author">
            <div className='author1'>
                <picture>
                    <img 
                        src={post.author.photo.url} 
                        alt={post.author.name}
                        className='author-img'
                    />
                </picture>
                <p>{post.author.name}</p>
            </div>
        </div>


        <div className="post-date">
            <div className="post-date1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='post-date-svg'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    {moment(post.createdAt).format('MM DD, YYYY')}
                </span>
            </div>
        </div>

        <p className='post-excerpt'>{post.excerpt}</p> 

        <div className='card-btn'>
            <Link href={`/post/${post.slug}`}>
                <span>
                    Continue Reading
                </span>
            </Link>
        </div>

    </div>
  )
}

export default PostCard