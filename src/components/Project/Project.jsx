import React from 'react'
import './Project.css'
import women from '../../assets/images/women2.png'

function Project({ className, title, date, text, image }) {

    return (
        <div className={`project ${className}`}>
            <h2>{title}</h2>
            <span>{date}</span>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Project
