import React, { Fragment } from 'react'
import HomeTopSection from '../../components/HomeTopSection/HomeTopSection'
import Projects from '../../components/Projects/Projects'
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'

function Home() {

    return (
        <Fragment>
            <HomeTopSection />
            <WhatWeDo />
            <Projects />
        </Fragment>
    )
}

export default Home
