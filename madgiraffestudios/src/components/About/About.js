import React from 'react';
import photoshoots from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import graphicdesign from '../../Images/aboutPage/graphics/graphic02.png';
import drawing from '../../Images/aboutPage/drawings/lucy_ill.jpeg';
import './About.scss';

//TODO: FIX NAV LINKS
const About = () => (

    <React.Fragment>
        <div className="bg-light" id="topParent">
            <div className="container" id="about-content">
                <div className="text-center pt-5 mx-auto w-50">
                    <h1 className="primary-color font-weight-bold p-3">Mad Giraffe STuDios</h1>
                    <p className="about-text font-weight-900 mb-5">
                        The best way to spark change is to start a conversation, and there’s no better way to start conversation than with art. For me, the best way to communicate with others is through art; it allows tough conversations to be had and to be learned. Art inspires me to make social change and inspire others to truly think.
            </p>
                </div>
            </div>
        </div>
        <div className="container mt-3" id="aboutlower">

            <div className="row about-content">
                <div className="col-md-6" id="first">
                    <img src={photoshoots} className="img-fluid rounded float-left" alt="Responsive image" />
                </div>
                <div className="col-md-6 mt-5 p-3" id="second">

                    <h5 className="font-weight-bold primary-color">Photo Shoots</h5><p className="w-75 text-muted">
                        At Mad Giraffe Studios, I am dedicated to capturing the moments as imagined, by you! The photo shoot is yours, this is your art. Look your best in a variety of shoots including, product, event and street photography, portraits, and more.</p>
                </div>
                <div>

                </div>

                <div className="row">
                    <div className="col-md-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold primary-color">Graphic Design</h5><p className="w-75 text-muted">Your improvement as a business is my priority. What a business displays is extremely important to how they’re portrayed. Using custom logos, and having a strong social media presence graphically will truly boost a company's brand and popularity.</p>
                    </div>
                    <div className="col-md-6" id="first">
                        <img src={graphicdesign} alt="performance" className="img-fluid rounded float-right" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6" id="first">
                        <img src={drawing} alt="performance" className="img-fluid rounded float-left" />
                    </div>
                    <div className="col-md-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold primary-color">Illustrations</h5>
                        <p className="w-75 text-muted">Now imagine having a favorite photo of yourself, or a loved one re-imagined through in an Illustration. Choose from a hand drawing, painting or digital art and let me bring your imagination to life.                                                                                            
                           </p>
                    </div>
                </div>
            </div>

        </div>

    </React.Fragment>
)


export default About;