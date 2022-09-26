import React from 'react';

import './About.css';

function About() {
    return (
        <>
            <div className='about-container'>

                <div className="about-content">

                    <h1>WHAT I DO</h1>

                    <div className="items-container">

                        <div className="item-box">

                            <div className="about-items">
                                <img className='about-icons' src="https://cdn.discordapp.com/attachments/710276943592816720/1024001993112571904/icons8-mac-book-pro-m1-100.png" alt="" />
                            </div>

                            <div className="items-text">
                                <h2>Responsive Mobile</h2>
                                <p>Responsive design to adapt the website to any device screen, regardless of size.</p>
                            </div>

                        </div>

                        <div className="item-box">

                            <div className="about-items">
                                <img className='about-icons' src="https://cdn.discordapp.com/attachments/710276943592816720/1024001992730886175/icons8-chain-100.png" alt="" />
                            </div>

                            <div className="items-text">
                                <h2>Minimalist CSS</h2>
                                <p>Minimalist styled CSS templates for efficient user understanding and comfort while inside the site.</p>
                            </div>

                        </div>

                        <div className="item-box">

                            <div className="about-items">
                                <img className='about-icons' src="https://cdn.discordapp.com/attachments/710276943592816720/1024001992307257415/icons8-paper-plane-100.png" alt="" />
                            </div>

                            <div className="items-text">
                                <h2>UI & UX Design</h2>
                                <p>Dynamic and interactive pages designed to hold the user's attention within the site and bring a pleasant experience.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;