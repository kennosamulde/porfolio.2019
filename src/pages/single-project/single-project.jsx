import React, { useContext } from "react"
import "./single-project.scss"
import StateContext from "../../state-context"
import { ReactComponent as Arrow } from "../../assets/iconmonstr-arrow-right-thin.svg"

const SingleProject = ({ match }) => {
  const projects = useContext(StateContext)
  const project = projects.find((project) => project.url === match.params.project)

  return (
    <div className="single-project">
      <div className="project-hero">
        <img src={project.heroImage} alt="heroimage" className="project-hero-img" />
      </div>

      <div className="project-header">
        <span>PROJECT #{project.id}</span>
        <h1>{project.title}</h1>
      </div>

      <div className="project-description">
        <div className="left">
          <h3>BRIEF DESCRIPTION</h3>
          <p>{project.about.brief}</p>
        </div>
        <div className="right">
          <div className="features">
            <h3>FEATURES</h3>
            <p>{project.about.features}</p>
          </div>
          <div className="tech">
            <h3>TECHNOLOGIES</h3>
            <p>{project.about.technology}</p>
          </div>
        </div>
      </div>

      <div className="project-images">
        {project.featureImages.map((image, index) => {
          return (
            <div className="image-holder" key={index}>
              <img src={image} alt="featured images" className="image" />
            </div>
          )
        })}
      </div>

      <div className="project-marquee">
        <h1>{(project.name.toUpperCase() + " ").repeat(5)}</h1>
      </div>

      <div className="project-preview">
        <div className="preview-header">
          <h2>More preview</h2>
          <p>{project.preview.description}</p>
          <a href={project.preview.link} className="hoverable">
            <span>View Live</span>
            <Arrow />
          </a>
        </div>
        <div className="preview-container">
          {project.preview.images.map((image, index) => {
            return (
              <picture key={index}>
                <img src={image} alt="previewimage" />
              </picture>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SingleProject
