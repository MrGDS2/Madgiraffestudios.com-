import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';
import photoshoots from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import graphicdesign from '../../Images/aboutPage/graphics/graphic02.png';
import uxDesin from '../../Images/aboutPage/ux/undraw_mobile_ux.png';
import drawing from '../../Images/aboutPage/drawings/lucy_ill.jpeg';
import { HOME } from '../../Constants/routes';
import { SocialIcon } from 'react-social-icons';

import './About.scss';
const About = () => (

    <React.Fragment>
        <div className="bg-light" id="topParent">
            <div className="container" id="about">
                <div className="text-center pt-5 mx-auto w-50">
                    <h1 className="primary-color font-weight-bold p-3">Mad Giraffe STuDios</h1>
                    <p className="font-weight-900 mb-5">
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
                        At Madgiffare studios I am dedicated to capturing the moment as imagined, by you! The photoshoot is yours, this is your art. Look your best in a variety of shoots including, product photography, portraits, street photography, and events.</p>
                </div>
                <div>

                </div>

                <div className="row">
                    <div className="col-md-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold primary-color">Graphic Design</h5><p className="w-75 text-muted">Your improvement as a business is my priority, what a business displays is extremely important to how they’re portrayed. Using custom logos, and having a strong Social media presence graphically will truly boost Company Branding and popularity.</p>
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
                        <p className="w-75 text-muted">Now imagine having your favorite photo of yourself, or a loved one reimagined through in an Illustration.Choose from a hand drawing,painting or digital art and let me bring your imagination to life.                                                                                            Get started today!
                           </p>
                    </div>
                </div>
            </div>

        </div>


        <div class="footer_bg pt-5 pb-3 bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class=" col-md-4 text-center">
                        <a href={HOME}> <img src={giraffeicon} height="50px" alt="logo" id="footer-logo" /></a>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="row">
                            <div className="col-md-2">

                                <p><SocialIcon url="https://www.instagram.com/madgiraffestudios/" bgColor="#8d18b4" />
                                </p>
                            </div>
                            <div className="col-md-2">
                                <p><SocialIcon url="https://twitter.com/MadGiraffeStud1" bgColor="#8d18b4" />
                                </p>
                            </div>
                            <div className="col-md-2">
                                <p>
                                    <SocialIcon url="https://www.linkedin.com/in/mackenzie-heslin-scott-70ab4a116/" bgColor="#8d18b4" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 bg-light"><h6 class="font-weight-bolder line-height">CONTACT INFORMATION</h6><p>Madgiraffestudios@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
)


export default About;