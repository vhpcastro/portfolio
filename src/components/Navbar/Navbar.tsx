import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar-container">

                <div className="navbar-content">

                    <div className="navbar-item">
                        <h2>Home</h2>
                        <div className="botline"></div>
                    </div>

                    <div className="navbar-item">
                        <h2>Work</h2>
                        <div className="botline"></div>
                    </div>

                    <div className="navbar-item">
                        <h2>About</h2>
                        <div className="botline"></div>
                    </div>

                    <div className="navbar-item">
                        <h2>Portfolio</h2>
                        <div className="botline"></div>
                    </div>

                    <div className="navbar-item">
                        <h2>Contact</h2>
                        <div className="botline"></div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Navbar;