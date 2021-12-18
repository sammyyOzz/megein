import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import TopSection from '../../components/TopSection/TopSection'
import './About.css'
import circle5 from '../../assets/icons/circle5.png'
import circle2 from '../../assets/icons/circle2.png'
import circle1 from '../../assets/icons/circle1.png'
import circle4 from '../../assets/icons/circle4.png'
import microphone from '../../assets/images/microphone.png'

function About() {

    return (
        <Fragment>
            <TopSection
                title="WHO ARE WE?"
                text="Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent 
                rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a 
                turpis vel iaculis. Morbi ac amet, consectetu r adipiscing elitPraesent 
                rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                Lorem ipsum dolor met, cor adipiscing elitPraesent rutrum a 
                turpis vel iaculis. Morbi ac lorem s"
                image={microphone}
            />
            <section className="about">
                <Grid container className="about__content">
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum quis sapien id volutpat. Aenean eu tincidunt eros. In hac habitasse platea dictumst. Integer pulvinar sem odio, nec interdum quam eleifend vitae. Duis volutpat facilisis maximus. Nulla vulputate in erat ac viverra. Nunc tempor nunc convallis diam posuere, sit amet porttitor ligula consequat. Nam sed finibus est, vitae dignissim purus. Ut velit urna, iaculis non vestibulum vel, finibus nec justo. Morbi id tortor condimentum, auctor odio vitae, imperdiet magna.</p>
                        <p>In hac habitasse platea dictumst. Nam vitae odio pellentesque, eleifend orci a, ullamcorper ante. Phasellus aliquet accumsan magna vitae laoreet. Praesent placerat magna ut lacinia ultricies. Donec auctor fermentum nulla. Curabitur accumsan dolor commodo tristique molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <p>Donec dictum porttitor ex. Vestibulum ornare gravida tincidunt. Ut consectetur nunc eget tristique efficitur. Phasellus viverra pulvinar lorem ac consectetur. Quisque ac mauris volutpat turpis luctus aliquam scelerisque eget dui. Cras porttitor finibus risus, a euismod ipsum porta vitae. Aliquam vehicula, est a laoreet gravida, tellus dui rutrum odio, ac ultrices tellus orci sit amet nisl. Nullam placerat dui et tortor malesuada aliquet. Aliquam laoreet massa non nibh fringilla faucibus.</p>
                        <p>Morbi et commodo nisi. Sed blandit eros maximus nibh placerat consequat. Aenean in ullamcorper justo. Pellentesque et imperdiet tortor. Curabitur a mollis elit. Sed vestibulum bibendum arcu, vitae vulputate dolor laoreet venenatis. Praesent blandit viverra lectus, vel aliquam lorem placerat eget. Ut et ornare mauris. Nunc vestibulum condimentum diam quis rutrum. Phasellus fringilla ullamcorper eros sit amet maximus. Nam accumsan tortor quis fringilla consequat.</p>
                        <p>Praesent vitae metus ac magna interdum suscipit. Proin felis leo, pulvinar et nisl consectetur, vestibulum gravida sem. Maecenas imperdiet urna et dui posuere placerat. Fusce eget blandit arcu. Nullam eu imperdiet odio. Nam quis risus tristique, malesuada ante at, euismod sem. In hac habitasse platea dictumst. Sed non sapien elit. Nam vel vestibulum dui. Suspendisse potenti.</p>
                    </Grid>
                    <Grid item xs={1} md={2} />
                </Grid>
                <img src={circle5} alt="" className="about__circle5" />
                <img src={circle2} alt="" className="about__circle2" />
                <img src={circle1} alt="" className="about__circle1" />
                <img src={circle4} alt="" className="about__circle4" />
            </section>
        </Fragment>
    )
}

export default About
