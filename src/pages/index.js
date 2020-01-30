import React from "react"
import "../css/index.css"
import ProjectCard from '../components/projectCard'
import Image1 from "/home/jake/Downloads/barnaby.jpg"

const IndexPage = () => {
  return (
    <div class="container">

      <div class="columns">

        <div id="bio-menu">


          <div class="bio-menu-info">

            <a href="https://placeholder.com"><img id="logo" src="https://via.placeholder.com/150" /></a>
            <h1>Zach Hall</h1>
            <p>Computer Science student at SEMO</p>


          </div>

        </div>

        <div id="project-menu">
          <h1>Projects</h1>
          <ProjectCard image={Image1} title="Chihuahua Rescue"  age="20" description="A website built for Chihuahua Rescue, a dog rescue in St.Louis Missouri"/>
          <ProjectCard image={Image1} title="Chihuahua Rescue"  age="20" description="A website built for Chihuahua Rescue, a dog rescue in St.Louis Missouri"/>

        </div>



    </div>
  </div>

  )
}

export default IndexPage
