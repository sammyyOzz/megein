import { Grid } from '@mui/material'
import React from 'react'
import './TopSection.css'

function TopSection({ title, text, image }) {
    
    return (
        <div className="topSection">
            <div className="topSection__container">
                <Grid container columns={18}>
                    <Grid item xs={2} md={4} />
                    <Grid item xs={13} md={6} className="topSection__content">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </Grid>
                    <Grid item xs={3} md={8} />
                </Grid>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default TopSection
