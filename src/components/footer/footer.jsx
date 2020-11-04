import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="follow">
          <h2>Get in touch or simply follow me.</h2>
          <span className="hoverable">kennosamulde@gmail.com</span>
        </div>

        <div className="social">
          <ul>
            <li className="hoverable">Dribbble.</li>
            <li className="hoverable">Behance.</li>
          </ul>
          <ul>
            <li className="hoverable">Github.</li>
            <li className="hoverable">Linkedin.</li>
          </ul>
        </div>
        <div className="desc">
          <span>I'm currently looking for a company in need of Front-end Development or UI Design service. If you find interest in my works, please do drop me a message on my email and I'll get back to you as soon as possible. Cheers!</span>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Copyright © 2020. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
