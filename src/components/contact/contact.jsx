import React from "react"
import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact" id={"contact"}>
      <div className="contact__main">
        <span>Got a project in mind?</span>
        <h2>
          Let's make it
          <br></br>awesome!
        </h2>
        <form action="">
          <div className="form-group">
            <input type="text" required name="name" />
            <label htmlFor="name">Your name*</label>
          </div>
          <div className="form-group">
            <input type="email" required name="email" />
            <label htmlFor="email">Email address*</label>
          </div>
          <div className="form-group">
            <input type="text" required name="company" />
            <label htmlFor="company">Name of your company*</label>
          </div>
          <div className="form-group">
            <input type="text" required name="body" />
            <label htmlFor="body">Tell me about your project*</label>
          </div>
          <button>SAY HELLO!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
