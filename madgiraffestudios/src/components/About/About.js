import React from 'react';
import photoshoots from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import graphicdesign from '../../Images/aboutPage/graphics/graphic02.png';
import drawing from '../../Images/aboutPage/drawings/lucy_ill.jpeg';
import { SocialIcon } from 'react-social-icons';

import './About.scss';
const About = () => (

    <React.Fragment>
        <div className="bg-light" id="topParent">
            <div className="container pb-2" id="about">
                    <div className="text-center pt-5 mx-auto w-50">
                            <h1 className="text-right primary-color font-weight-bold p-3 studio-name">
                             Mad Giraffe STuDios
                            </h1>  
                    <p className="font-weight-900 mb-5 studio-text">
                    There’s no better way to start a conversation than with art. It allows tough conversations to be had, thus allowing us to grow . Art inspires me to make social change and inspire others to follow suit.
                   </p>
                   
                </div>
            </div>
                   
        </div>
      
        <div className="container mt-3" id="aboutlower">

            <div className="row about-content">
                <div className="col-md-6" id="first">
                    <img src={photoshoots} className="img-fluid rounded float-left about-img" alt="Responsive image" />
                </div>
                <div className="col-md-6 mt-5 p-3" id="second">

                    <h5 className="font-weight-bold primary-color description-title">Photo Shoots</h5><p className=" text-muted description-text">
                        At Mad Giraffe Studios, I am dedicated to capturing the moments as imagined, by you! The photo shoot is yours, this is your art. Look your best in a variety of shoots including, product, event and street photography, portraits, and more.</p>
                </div>
                <div>

                </div>

                <div className="row">
                    <div className="col-md-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold primary-color description-title">Graphic Design</h5><p className="text-muted description-text">Your improvement as a business is my priority. What a business displays is extremely important to how they’re portrayed. Using custom logos, and having a strong social media presence graphically will truly boost a company's brand and popularity.</p>
                    </div>
                    <div className="col-md-6" id="first">
                        <img src={graphicdesign} alt="performance" className="img-fluid rounded float-right about-img" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6" id="first">
                        <img src={drawing} alt="performance" className="img-fluid rounded float-left about-img" />
                    </div>
                    <div className="col-md-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold primary-color description-title">Illustrations</h5>
                        <p className="text-muted description-text">Now imagine having a favorite photo of yourself, or a loved one re-imagined through in an Illustration. Choose from a hand drawing, painting or digital art and let me bring your imagination to life.
                           </p>
                    </div>
                </div>
            </div>

        </div>

    </React.Fragment>
)


export default About;