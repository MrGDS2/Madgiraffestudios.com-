import React, { useState } from 'react';
import Painter from '../../Images/main-img.png'
import Spark from '../../Images/spark.png'
import About from '../About/About';

const Home = () => {
    return (
        <React.Fragment>

            <div className="main-page mb-5" id="home">
                <div className="mx-5 pt-4 elevator-pitch">
                    <div className="text-center container mt-5">
                        <strong><p className="emphasized-text">The best way to sp
                            <span><img src={Spark} alt="spark"/></span>rk change</p>
                        </strong>
                        <strong><p className="emphasized-text primary-color">is to start a conversation.</p></strong>
                        <h5 className="pt-4">I try to capture the in between moments, the moments that most people take for granted.</h5>
                        <h5>Stories are not told they are assumed. <span className="oblique-text">~Kae, Creative Owner</span></h5>
                        <span>
                            <img src={Painter} alt="painter" className="main-img"/>
                        </span>
                    </div>
                </div>
            </div>

            <About />
        </React.Fragment>
    );

}
export default Home;
