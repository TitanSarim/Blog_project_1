import React, {useRef, useState, useEffect} from 'react'
import moment from 'moment'
import parse  from 'html-react-parser';

import { getComments } from '../services';

const Comment = ({slug}) => {

  const [comments, setComments] = useState([]);

  useEffect(() =>{
    getComments(slug)
        .then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (

        <div className='show-comments'>
          <div className='show-comments2'>

            <h3>
              {comments.length}
              {' '}
              Comments
            </h3>

            {comments.map((comment, index) => (
              <div className='comment-content'>
                <p>
                  <span>{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>

                <p className='comment-seperation'>{parse(comment.comment)}</p>

              </div>

            ))}
          </div>
        </div>


      )}
    </>
  )
}

export default Comment