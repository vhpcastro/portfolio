import React from 'react';

import './Skills.css';

function Skills() {
    return (
        <>
            <div className="skills-container">

                <div className="skills-content">

                    <div className="skill-box01">
                        <h1>ABOUT ME</h1>
                        <h3>DESIGNER AND DEVELOPER</h3>

                        <div className="skill-text">
                            <p>Since I was little I feel that creativity was my main strong point, followed by curiosity to know how
                                things that I liked were built, especially games.</p>
                            <p>Studying Systems Analysis and Development in college, I had more contact with technology and development as a programmer and since then I've
                                been improving my knowledge, always looking to become a better version of myself than before.</p>
                        </div>

                    </div>

                    <div className="skill-box02">

                        <div className="skill-item">

                            <div className="skills">
                                <p>HTML5</p>
                                <p>85%</p>
                            </div>

                            <div className="skillbar">
                                <div className="bar01-html"></div>
                                <div className="bar02-html"></div>
                            </div>

                        </div>

                        <div className="skill-item">

                            <div className="skills">
                                <p>CSS3</p>
                                <p>70%</p>
                            </div>

                            <div className="skillbar">
                                <div className="bar01-css"></div>
                                <div className="bar02-css"></div>
                            </div>

                        </div>

                        <div className="skill-item">

                            <div className="skills">
                                <p>JavaScript</p>
                                <p>50%</p>
                            </div>

                            <div className="skillbar">
                                <div className="bar01-js"></div>
                                <div className="bar02-js"></div>
                            </div>

                        </div>

                        <div className="skill-item">

                            <div className="skills">
                                <p>React</p>
                                <p>40%</p>
                            </div>

                            <div className="skillbar">
                                <div className="bar01-react"></div>
                                <div className="bar02-react"></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills;