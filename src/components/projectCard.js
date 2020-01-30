import React from 'react'



class ProjectCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.title} style={{width: "200px"}} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default ProjectCard
