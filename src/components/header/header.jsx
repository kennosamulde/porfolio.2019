import React from "react"
import "./header.scss"
import { Link, withRouter } from "react-router-dom"

const Header = ({ match }) => {
  return (
    <header>
      <Link className="logo hoverable" to="/">
        <h3>k</h3>
        <h4>s</h4>
      </Link>
    </header>
  )
}

export default withRouter(Header)
