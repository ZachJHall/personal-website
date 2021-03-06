import React from "react"
import "../css/index.css"
import ProjectCard from '../components/projectCard'
import Contact from '../components/contact'
import ChihuahuaRescueMidwest from "../images/chihuahuaRescueMidwestImage.png"
import DigitalPaintBoard from '../images/digital-paint-board.png'
import Resume from '../components/ZachHall_Resume_For_Website.pdf'

const IndexPage = () => {
  return (
    <div class="container">

      <div class="columns">

        <div id="bio-menu">


          <div class="bio-menu-info">


            <h1>Zach Hall</h1>
            {/* <p>Computer Science student at SEMO</p>  */}
            <a target="_blank" rel="noopener noreferrer" href= {Resume}><button class="resume-button">Resume</button></a>
            <Contact />

          </div>

        </div>

        <div id="project-menu">
          <h1>Projects</h1>
          <div class="project-menu-info">
            <ProjectCard image={ChihuahuaRescueMidwest} url= "https://www.chihuahuarescuemidwest.org/" title="Chihuahua Rescue" description="A website built for Chihuahua Rescue, a dog rescue in St.Louis Missouri"/>
            <ProjectCard image={DigitalPaintBoard} url= "https://zachjhall.github.io/digital-paint-board/" title="Digital Paint Board" description="A website that allows the user to paint on a digital paint board"/>

          </div>
        </div>



    </div>
  </div>

  )
}

export default IndexPage
