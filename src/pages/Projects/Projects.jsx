import React, { Fragment } from 'react'
import TopSection from '../../components/TopSection/TopSection'
import projectsPageImage from '../../assets/images/projectsPage.png'
import './Projects.css'
import Project from '../../components/Project/Project'
import { projectsData } from './projectsData'
import women2 from '../../assets/images/women2.png'


function Projects() {

    return (
        <Fragment>
            <TopSection
                title="PROJECTS"
                text="Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent 
                rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a 
                turpis vel iaculis. Morbi ac amet, consectetu r adipiscing elitPraesent 
                rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                Lorem ipsum dolor met, cor adipiscing elitPraesent rutrum a 
                turpis vel iaculis. Morbi ac lorem s"
                image={projectsPageImage}
                projectPage
            />
            <section className="projects">
                <div className="projects__container">
                    <Project title={projectsData[0].title} date={projectsData[0].date} text={projectsData[0].text} image={women2} />
                    <Project title={projectsData[1].title} date={projectsData[1].date} text={projectsData[1].text} image={women2} />
                </div>
            </section>
        </Fragment>
    )
}

export default Projects
