import React from 'react';
import Painter from '../../Images/website-image.png';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';

const Home = () => {

    return (
        <React.Fragment>
<div className="main-page" id="home">
                    <div className="row mx-5 pt-4 elevator-pitch">
                        <div className="col-md-10 col-xs-12 mt-5 ">
                            <strong><p className="emphasized-text">The best way to spark change</p></strong>
                            <strong><p className="emphasized-text">is to start a conversation.</p></strong>
                            <h5>I try to capture the in between moments, the moments that most people take for granted.</h5>
                            <h5>Stories are not told they are assumed. <span className="oblique-text">~Kae, Creative Owner</span></h5>
                            <button type="button" className="btn btn-lg shadow-lg booking-btn mt-3 mb-5 p-3">Book Me</button>
                        </div>
                        <div className="col-md-2 painter-img mt-5">
                            <img src={Painter} alt="painter" className="rounded" height="400px"/>
                        </div>
                    </div>
            </div>

            <About/>
            <Gallery/>
        </React.Fragment>
    );

}
export default Home;
