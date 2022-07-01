import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import{MdLocationPin, MdCall} from 'react-icons/md';
import {SiMinutemailer, SiGooglechrome} from 'react-icons/si'

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8tkm53m', 'template_szt42pw', form.current, 'PE64630cT9GYtXUr3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactus-form'>
      <div className='contactus-form-title'>
       <h1>Contact Us</h1>
      </div>
      

      <div className='contactus-form-container'>

          <div className='contactus-form-form'>
            <h1>Write Us</h1>
            <form ref={form} onSubmit={sendEmail} className='contactus-form-inputform'> 
              <input className='contactus-form-inputform-input1' type="text" name="sender_name" required placeholder='Your Name' />
              <input className='contactus-form-inputform-input2' type="email" name="sender_email" required  placeholder='Your Email'/>
              <textarea className='contactus-form-inputform-message' name="sender_message" required placeholder='Write Message'/>
              <button className='contactus-form-inputform-btn' type="submit" value='Send'>Send Mail</button>
            </form>
          </div>

          <div className='contactus-form-content'>
            <div className='contactus-form-content-info'>

              <div className='contactus-form-content-info-first'>
                <h1>Contact Information</h1>
                <p>We are open for any suggestion or just to have a chat</p>
              </div>

              <div className='contactus-form-content-info-icons'>
                
                  <div className='contactus-form-content-info-location'>
                    <MdLocationPin size={55} className='contactus-form-icons'/>
                    <h1>Address: <span>Pakistan, Pubjab</span></h1>
                  </div>

                  <div className='contactus-form-content-info-location'>
                    <MdCall size={55} className='contactus-form-icons'/>
                    <h1>Phone: <span>+92 0310 6727874</span></h1>
                  </div>

                  <div className='contactus-form-content-info-location'>
                    <SiMinutemailer size={55} className='contactus-form-icons'/>
                    <h1>Email: <span>sarimxahid123@gmail.com</span></h1>
                  </div>

                  <div className='contactus-form-content-info-location'>
                    <SiGooglechrome size={55} className='contactus-form-icons'/>
                    <h1>Website: <span>bbegy.com</span></h1>
                  </div>

              </div>

            </div>

          </div>

      </div>

    </div>
  )
}

export default ContactUs