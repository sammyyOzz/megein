import { Grid } from '@mui/material'
import React from 'react'
import './TopSection.css'
import microphone from "../../assets/images/microphone.png"

function TopSection() {
    
    return (
        <div className="topSection">
            <div className="topSection__container">
                <Grid container columns={18}>
                    <Grid item xs={2} md={4} />
                    <Grid item xs={13} md={6} className="topSection__content">
                        <h1>WHO ARE WE?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent 
                        rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                        Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a 
                        turpis vel iaculis. Morbi ac amet, consectetu r adipiscing elitPraesent 
                        rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                        Lorem ipsum dolor met, cor adipiscing elitPraesent rutrum a 
                        turpis vel iaculis. Morbi ac lorem s</p>
                    </Grid>
                    <Grid item xs={3} md={8} />
                </Grid>
            </div>
            <img src={microphone} alt="" />
        </div>
    )
}

export default TopSection
