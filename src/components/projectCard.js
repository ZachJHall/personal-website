import React from 'react'
import "../css/projectCard.css"


class ProjectCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.title} style={{width: "300px", height: "300px"}} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default ProjectCard
