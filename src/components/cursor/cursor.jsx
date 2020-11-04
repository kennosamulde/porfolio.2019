import React, { useEffect } from "react"
import "./cursor.scss"
import { TweenMax } from "gsap"

const Cursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big")
    const smallBall = document.querySelector(".cursor__ball--small")
    const hoverables = document.querySelectorAll(".hoverable")

    // Listeners
    window.onmousemove = function (e) {
      var mouseX = e.clientX
      var mouseY = e.clientY

      TweenMax.to(bigBall, 0.4, {
        top: mouseY + "px",
        left: mouseX + "px",
      })
      TweenMax.to(smallBall, 0.1, {
        top: mouseY + 2 + "px",
        left: mouseX + 10 + "px",
      })
    }
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", onMouseHover)
      hoverable.addEventListener("mouseleave", onMouseHoverOut)
    })

    // Hover an element
    function onMouseHover() {
      TweenMax.to(bigBall, 0.3, {
        scale: 4,
      })
    }
    function onMouseHoverOut() {
      TweenMax.to(bigBall, 0.3, {
        scale: 1,
      })
    }

    return () => {
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", onMouseHover)
        hoverable.removeEventListener("mouseleave", onMouseHoverOut)
      })
    }
  }, [])

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  )
}

export default Cursor
