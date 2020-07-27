import React from 'react';
import Painter from '../../Images/artist.svg'

const Home = () => {

    return (
        <div className="main-page">
            <div className="p-5">
                <div className="row container">
                    <div className="col-md-10 mt-5">
                        <strong><p className="emphasized-text">The best way to spark change</p></strong>
                        <strong><p className="emphasized-text">is to start a conversation.</p></strong>
                        <h5>I try to capture the in between moments, the moments that most people take for granted.</h5>
                        <h5>Stories are not told they are assumed. <span className="oblique-text">~Kae, Creative Owner</span></h5>
                        <button type="button" className="btn btn-lg shadow-lg booking-btn mt-3 mb-5 p-3">Book Me</button>
                    </div>
                    <div className="col-md-2">
                        <img src={Painter} alt="painter"/>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Home;