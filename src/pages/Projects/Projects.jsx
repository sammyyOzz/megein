import React, { Fragment } from 'react'
import TopSection from '../../components/TopSection/TopSection'
import projectsPageImage from '../../assets/images/projectsPage.png'
import './Projects.css'
import Project from '../../components/Project/Project'
import { projectsData } from './projectsData'
import women2 from '../../assets/images/women2.png'
import { Grid } from '@mui/material'


function Projects() {

    return (
        <Fragment>
            <TopSection
                title="PROJECTS"
                text="The media and gender enlightenment initiative (MEGEIN) emerged in 2008  as a non-profit organization to serve as a leading organ for media and gender-sensitivty in Nigeria and beyond."
                image={projectsPageImage}
                projectPage
            />

            <Grid container className="projects">
                <Grid item xs={1} md={3} />
                <Grid item xs={10} md={6}>
                    <Project title={projectsData[0].title} date={projectsData[0].date} text={projectsData[0].text} image={women2} />
                    <Project title={projectsData[1].title} date={projectsData[1].date} text={projectsData[1].text} image={women2} />
                    <Project title={projectsData[2].title} date={projectsData[2].date} text={projectsData[2].text} image={women2} />
                    <Project title={projectsData[3].title} date={projectsData[3].date} text={projectsData[3].text} image={women2} />
                </Grid>
                <Grid item xs={1} md={3} />
            </Grid>
        </Fragment>
    )
}

export default Projects
