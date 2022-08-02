import React, { useRef, useState, useEffect } from 'react';

import './Contactme.css';
import emailjs from 'emailjs-com';

import { HiOutlineMail } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsSnapchat } from 'react-icons/bs';

const Contactme = props => {

    const Expire = props => {
        const [visible, setVisible] = useState(true);
      
        useEffect(() => {
            const timer = setTimeout(() => {
            setVisible(false);
            }, props.delay);
            return () => clearTimeout(timer)
        }, [props.delay]);
      
        return visible ? <div>{props.children}</div> : <div />;
      };
    
      const [status, setStatus] = useState('');
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r8msycp', 'template_6tytl0v', form.current, '1kS-9g6z5m4q7gbWz')
          .then((result) => {
              console.log(result.text);
              setStatus("Your message has been sent successfully!");
          }, (error) => {
              console.log(error.text);
              setStatus("Some thing went wrong. Please try again later.");
          });
        e.target.reset();  
      };


    return (
        <section id='contact' className='section section--hidden'>
          <p>Say, Hello</p>
          <h2>Contact</h2>
    
          <div className='container contact_container'>
            <div className='contact_options'>
              <article className='contact_option'>
                <HiOutlineMail className='contact_icons'/>
                <h4>Email</h4>
                <h5>13kunalthakur@gmail.com</h5>
                <a href='mailto:13kunalthakur@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
              </article>
    
              <article className='contact_option'>
                <FaTelegramPlane className='contact_icons'/>
                <h4>Telegram</h4>
                <h5>kunal_62</h5>
                <a href='https://t.me/kunal_62' target="_blank" rel="noreferrer">Send a message</a>
              </article>
    
              <article className='contact_option'>
                <BsSnapchat className='contact_icons'/>
                <h4>Snapchat</h4>
                <h5>kthakur8686</h5>
                <a href='https://snapchat.com/add/kthakur8686' target="_blank" rel="noreferrer">Send a message</a>
              </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='from_name' placeholder='Your Name' required/>
              <input type='email' name='from_email' placeholder='Your Email' required/>
              <textarea name='message' rows="?" placeholder='Your Message' required></textarea>
              <button type='submit' className='contact-btn'>👋 Say Hello</button>
              <div className='status'>
                <Expire delay="5000">{status}</Expire>
              </div>
            </form>
          </div>
        </section>
      )
}


export default Contactme;