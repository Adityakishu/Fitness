import React from 'react'
import './Contactt.css'

export default function Contact() {
  return (
    <>
      <div className="containerForm">

        <h3>Get in touch with us</h3>
        <p>Please fill out the form below, we will get back to you as soon as possible.</p>

        <form id="contactForm">
            <div className="form-group-inline">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required minLength={3}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required minLength={3}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required minLength={10} maxLength={10}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}
