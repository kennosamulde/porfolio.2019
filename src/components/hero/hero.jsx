import React from "react"
import "./hero.scss"

import { ReactComponent as Circle } from "../../assets/scroll_down.svg"
import { ReactComponent as ArrowScroll } from "../../assets/iconmonstr-arrow-down-thin.svg"

const Hero = () => {
  function scrollDown(e) {
    e.preventDefault()
    const height = document.querySelector(".hero")

    window.scrollTo({
      top: height.scrollHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>A well-crafted product is one that works, looks good and connects people.</h1>
        <span>&mdash; Kenno Samulde</span>
      </div>

      <div className="scroll hoverable" onClick={scrollDown}>
        <Circle className="circle" />
        <ArrowScroll className="arrow" />
      </div>
    </div>
  )
}

export default Hero
