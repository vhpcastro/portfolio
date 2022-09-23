import React from 'react';

import './Home.css';

function Home() {
    return (
        <>

            <div className="container">

                <div className="content">

                    <div className="introduction">
                        <h1>Hello, I'm Victor,</h1>

                        <div className="bold">
                            <p className='p1-1'>a front-end</p>

                            <p className='p1-2'>developer.</p>
                        </div>

                    </div>

                    <div className="reference">
                        <p className='p2'>❝Art defies technology, and technology inspires art❞.</p>
                        <p className='p3'>John Lasseter – director and animator.</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;