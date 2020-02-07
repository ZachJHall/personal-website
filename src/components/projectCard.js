import React from 'react'
import "../css/projectCard.css"


class ProjectCard extends React.Component {
  render() {
    return (
      <div id="project-card-div">
        <img id="project-card-image"src={this.props.image} alt={this.props.title} />
        <a target="_blank" rel="noopener noreferrer" href={this.props.url}><h1 id="project-card-title">{this.props.title}</h1></a>
        <p id="project-card-description">{this.props.description}</p>
      </div>
    )
  }
}

export default ProjectCard
