import React from 'react'
import './ProjectsSection.css'
import circle5 from '../../assets/icons/circle5.png'
import circle2 from '../../assets/icons/circle2.png'

function ProjectsSection() {

    return (
        <section className="projectsSection">
            <h1>PROJECTS</h1>
            <img src={circle5} alt="" className="projectsSection__circle5" />
            <img src={circle2} alt="" className="projectsSection__circle2" />
            <div className="projectsSection__image">
                <div className="projectsSection__overlay">
                    <div className="projectsSection__overlayContent">
                        <h2 className="projectsSection__title">Lorem Ipsum Header</h2>
                        <p className="projectsSection__text">Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent 
                        rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                        Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a 
                        turpis vel iaculis. Morbi ac amet, consectetu r adipiscing elitPraesent 
                        rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                        Lorem ipsum dolor met, cor adipiscing elitPraesent rutrum a 
                        turpis vel iaculis. Morbi ac lorem s</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
