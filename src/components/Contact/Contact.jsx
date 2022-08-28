import './contact.css';
import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context/Context';
// import Cont from 'dotenv'

const Contact = () => {

    
    // let confi = Cont.config()
    console.log(process.env.REACT_APP_SERVICE);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(`${process.env.REACT_APP_SERVICE}`, `${process.env.REACT_APP_TEMPLATE}`, form.current, `${process.env.REACT_APP_KEY}`)
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className="c-form" id='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span className='con' style={{color: darkMode ? "white" : ""}}>Get in touch</span>
                    <span className='con'>Contact me</span>
                    <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input required type="text" name='user_name' className='user' placeholder='Name' />
                    <input required type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea required name='message' className='user' placeholder='Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur2" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact