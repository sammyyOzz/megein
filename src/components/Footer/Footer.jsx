import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__linksContainer">
                <div>HOME</div>
                <div>ABOUT</div>
                <div>PROJECTS</div>
                <div>CONTACT</div>
            </div>
            <p>Copyright 2021 Media and Gender Enlightenment Initiative (MEGEIN). All Rights Reserved.</p>
            <p style={{ marginTop: '10px' }}>Powered by Trevlo Technologies Limited</p>
        </div>
    )
}

export default Footer
