import React, {useRef, useState, useEffect} from 'react'

import {submitComment} from '../services'

const CommentForm = ({slug}) => {

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();



    useEffect(() =>{
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleSubmitComment = () =>{
        setError(false);

        const {value: comment} = commentEl.current;
        const {value: name} = nameEl.current;
        const {value: email} = emailEl.current;
        const {checked: storeData} = storeDataEl.current;

        if(!comment || !name || !email){
            setError(true)
            return
        }
        const commentObj = {name, email, comment, slug};
        if(storeData){
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        }else{
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }
        submitComment(commentObj)
            .then((res) => {
                setShowSuccess(true);
                setTimeout(() =>{
                    setShowSuccess(false);
                }, 3000);
            })
    }

  return (
    <div className='comment-form'>

        <div className='comment-form1'>

            <h3>FeedBack</h3>


            <div className='comment-form-input'>
                <textarea className="comment-form-input-textarea" ref={commentEl} placeholder="Comment..." name='Comment'>
                </textarea>
            </div>

            <div className='comment-form-input-ne'>
                <div className='comment-form-input-ne2'>
                    <input className='comment-form-input-name' type="text" ref={nameEl} placeholder="Name" name="name"/>
                
                    <input className='comment-form-input-email' type="text" ref={emailEl} placeholder="Email" name="email"/>
                </div>
            </div>

            {/* ask user to storeData */}
            <div className='comment-form-checkbox'>
                <div className=''>
                    <input type="checkbox" ref={storeDataEl} id="storeData" name='storeData ' value='true'/>
                    <label htmlFor='storeData'>Save My Email & Name</label>
                </div>
            </div>

            {error && <p className='error-field'>All Fields are Required</p>}

            <div className='comment-form-btn'>
                <button type='button' onClick={handleSubmitComment}>
                    Post Comment
                </button>
            </div>

            {showSuccess && <span className='comment-form-subbmitted'>Comment Submitted</span>}

        </div>
    </div>
  )
}

export default CommentForm