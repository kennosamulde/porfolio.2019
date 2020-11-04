import React from "react"

import Hero from "../../components/hero/hero"
import Project from "../../components/project/project"
import About from "../../components/about/about"

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Project />
      <About />
    </div>
  )
}

export default Home
