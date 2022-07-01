import React from 'react'
import moment from 'moment'

const PostDescription = ({post}) => {

  const getContentFragment = (index, text, obj, type) =>{
    let modifiedText= text;

    if(obj){

      if(obj.bold){
        modifiedText = (<b key={index}> {text} </b>);
      }

      if(obj.italic){
        modifiedText = (<b key={index}> {text} </b>)
      }

      if(obj.underline){
        modifiedText = (<b key={index}> {text} </b>)
      }

    }

    switch(type){
      case 'heading-three':
          return <h3 key={index} className="heading-three">
            {modifiedText.map((item, i) =><React.Fragment key={i}> {item} </React.Fragment>)}
          </h3>;

      case 'paragraph':
          return <p key={index} className="font-paragraph">
            {modifiedText.map((item, i) =><React.Fragment key={i}> {item} </React.Fragment>)}
          </p>;

      case 'heading-four':
          return <h4 key={index} className="heading-four">
            {modifiedText.map((item, i) =><React.Fragment key={i}> {item} </React.Fragment>)}
          </h4>;

      case 'image':
        return(
          <div className='desc-img-default'>
            <picture>
              <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
              style={obj.style}
              />
          </picture>
         </div>
        );
        default:
          return modifiedText;
    };
  }

  return (

    <div className='post-desc'>

      <div className='post-desc1'>
      
      <div className='post-desc-img'>
        <picture>
          <img 
              src={post.featured.url} 
              alt={post.title}
              className='post-desc-img1'
          />
        </picture>
      </div>

      <div className='post-desc-author'>
        <div className='post-desc-author1'>
          <picture>
          <img 
              src={post.author.photo.url} 
              alt={post.author.name}
              className='post-desc-author-img'
          />
          </picture>
          <p>{post.author.name}</p>
        </div>
      </div>

      <div className='post-desc-date'>
        <div className='post-desc-date1'>

          <svg xmlns="http://www.w3.org/2000/svg" className="post-desc-date-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          <span className='post-desc-date-post'>
            {moment(post.createdAt).format('MMM DD,YYYY')}
          </span>

        </div>
      </div>

      <h1>{post.title}</h1>

        {post.content.raw.children.map((typeObj, index)=>{
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}

      </div>
    </div>

  )
}

export default PostDescription