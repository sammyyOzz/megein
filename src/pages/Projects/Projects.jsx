import React, { Fragment } from 'react'
import TopSection from '../../components/TopSection/TopSection'
import projectsPageImage from '../../assets/images/projectsPage.png'
import './Projects.css'
import Project from '../../components/Project/Project'
import { projectsData, projectImages1, projectImages2, projectImages3 } from './projectsData'
import women2 from '../../assets/images/women2.png'
import { Grid } from '@mui/material'
import { useParams, useHistory } from 'react-router-dom'


function Projects() {
    const { page } = useParams()
    const history = useHistory()

    const handleNav = (page) => {
        history.push(`/projects/${page}`)
    }

    return (
        <Fragment>
            <TopSection
                title="PROJECTS"
                text="The media and gender enlightenment initiative (MEGEIN) emerged in 2008  as a non-profit organization to serve as a leading organ for media and gender-sensitivty in Nigeria and beyond."
                image={projectsPageImage}
                projectPage
            />

            { page === '1' && (
                <>
                    <h2 className="projects__title">Request for Info: Media Reportage of Land Rights & Agricultural Development</h2>
            
                    <p className="projects__text">Sequel to our correspondence with Sarah Macharia on March 15th 2019, the project 2912 was scheduled to commence in April 2019, but did not take off as earlier communicated. This was against the backdrop of the Gent chart for 2019 WACC project sent to us by Gesele Langendries, which indicated that field work in the area of Land Rights and Agricultural Development should be conducted in line with the code sheet and coding instruction of the GMMP methodology. As a result, field work was due to take off in June, while analysis will be in July - August.</p>
                    <p className="projects__text">This Gent chart was exactly followed by MEGEIN. In June, we conducted the field work on Land Rights and Agricultural Development: Implications for Gender Perspective. The analysis of data ran through July to September, 2019. After thorough review of the results, the report was sent to Sarah Macharia on October, 2019. The fallout of the findings guided the development of the training manual and papers for presentation during the workshop sessions. </p>
                    <p className="projects__text">The workshop officially took off on 19th of November 2019 in Owerri at Delegend Hotel Opposite State House of Assembly, IMO State. The Owerri workshops ran for two days (19 & 20th November, 2019). We are sure to finish Southern zone and begin with Northern zone before the end of December. The impact of the workshops are very impressive as the journalists gave their reactions and views during the interactive sessions. These views are currently being crystallised into a wholesome report. </p>

                    <div className="projects__images-container">
                        { projectImages1.map((image, i) => (
                            <img key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '2' && (
                <>
                    <h2 className="projects__title">GMMP Training Workshop in Kenya</h2>
                    <div className="projects__images-container">
                        { projectImages2.map((image, i) => (
                            <img key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '3' && (
                <>
                    <h2 className="projects__title">Violence against Women (VAW)</h2>
                    <div className="projects__images-container">
                        { projectImages3.map((image, i) => (
                            <img key={i} className="projects__image" src={image} alt="" />
                        ))}
                    </div>
                </>
            )}

            { page === '4' && (
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
            )}

            <div className="projects__nav-button-container">
                { Array(4).fill().map((item, i) => (
                    <button className={`projects__nav ${page === String(i + 1) && 'projects__nav-active' }`} onClick={() => handleNav(i + 1)}>{ i + 1 }</button>
                ))}
            </div>
        </Fragment>
    )
}

export default Projects
