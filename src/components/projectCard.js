import React from 'react'
import "../css/projectCard.css"


class ProjectCard extends React.Component {
  render() {
    return (
      <div id="project-card-div">
        <img id="project-card-image"src={this.props.image} alt={this.props.title} style={{width: "300px", height: "300px"}} />
        <h1 id="project-card-title">{this.props.title}</h1>
        <p id="project-card-description">{this.props.description}</p>
      </div>
    )
  }
}

export default ProjectCard
