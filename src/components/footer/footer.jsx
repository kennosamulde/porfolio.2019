import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="follow">
          <h2>Get in touch or simply follow me.</h2>
          <a href="mailto:kennosamulde@gmail.com" className="hoverable">
            kennosamulde@gmail.com
          </a>
        </div>

        <div className="social">
          <div>
            <a href="https://dribbble.com/ksamulde" className="hoverable">
              Dribbble.
            </a>
            <a href="https://www.behance.net/kSamulde" className="hoverable">
              Behance.
            </a>
          </div>
          <div>
            <a href="https://github.com/kennosamulde" className="hoverable">
              Github.
            </a>
            <a href="https://www.linkedin.com/in/ksamulde/" className="hoverable">
              LinkedIn.
            </a>
          </div>
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
