import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md";
import {BsTelegram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anujsoni055@gmail.com</h5>
            <a href="mailto:anujsoni055@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Find me on Telegram</h5>
            <a href="https://t.me/doctorstrange4567" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Message me on Whatsapp</h5>
            <a href="https://wa.me/qr/5WI4D5RLZ4B3P1" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your email' required />
          <textarea name="message" placeholder='Your Meassage' required rows="10"></textarea>
          <button className='btn btn-primary' type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact