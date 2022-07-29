import React from 'react'
import './connect.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Connect = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio',e.target, 'jTtOKDaJUxj5qRphR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
      <Sidebar/>
      <div className='connect'>
        <div className="connect__wrapper">
          <div className="connect__title">
            <h1>contact me</h1>
          </div>
          <form onSubmit={sendEmail} className="connect__form">
            <input type="text" placeholder='Your name...' name='name'/>
            <input type="email" placeholder='Your email...' name='email' />
            <input type="text" placeholder='Subject...' name='subject' />
            <textarea placeholder='Your message' name='message' ></textarea>
            <button type='submit'>Submit</button>
          </form>
          <div className="auth__detail">
            <div className="phone">
              <PhoneIcon className='icon'/>
              <p>0928404205</p>
            </div>
            <div className="email">
              <EmailIcon className='icon'/>
              <p>shakya12210305@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
