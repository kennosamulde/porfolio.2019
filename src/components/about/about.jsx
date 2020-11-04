import React from "react"
import "./about.scss"
import Think from "../../assets/james-healy-WZ-YnvCCLug-unsplash.jpg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__main">
        <h2>The story of a designer turned developer</h2>
        <article>
          <div className="about-img-container">
            <img src={Think} alt="" className="about-img" />
          </div>

          <span className="info">
            <br />
            5 years working as a designer, I've always seen my works as mere tools for advertisements if not for print or digital visuals. I can't help but wonder, what if I could create something that is genuinely useful, something that people would love to use on a daily basis.
            <br />
            <br />
            That's when I turned to front-end development... 2 years ago I started my journey as a self-taught developer. I bought a bunch of online courses to help me learn, watched alot of tutorial videos, read documentations and fortunately was able to create my own websites.
          </span>
        </article>
      </div>
      <div className="about__skills">
        <div>
          <h4>Development</h4>
          <ul>
            <li>HTML</li>
            <li>SASS (CSS)</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Node.js + Express (Working knowledge)</li>
            <li>Bootstrap</li>
            <li>Mongo DB Atlas, Firebase</li>
            <li>Gsap</li>
            <li>Jquery</li>
            <li>Basic Wordpress</li>
          </ul>
        </div>
        <div>
          <h4>Tools</h4>
          <ul>
            <li>Git, Github, Gitbash</li>
            <li>Visual Studio Code</li>
            <li>Npm / Yarn</li>
            <li>Heroku, Netlify</li>
            <li>Adobe Photoshop, Indesign, Illustrator, XD</li>
          </ul>
        </div>
        <div>
          <h4>Experience</h4>
          <ul>
            <li>Layout Artist</li>
            <li>Multimedia Developer</li>
            <li>Graphic Designer</li>
            <li>Wordpress Designer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
