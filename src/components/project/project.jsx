import React, { useContext } from "react"
import "./project.scss"
import { withRouter } from "react-router-dom"

import StateContext from "../../state-context"

const Project = ({ history, match }) => {
  const items = useContext(StateContext)

  return (
    <div className="project">
      <div className="project__container">
        {items.map((item) => {
          return (
            <div className="project__item hoverable" key={item.id} onClick={() => history.push(`/${item.url}`)}>
              <div className="image">
                <img src={item.heroImage} alt="heroImage" />
              </div>

              <div className="text">
                <h4 className="text__title"> {item.name}</h4>
                <span>VIEW PROJECT</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withRouter(Project)
