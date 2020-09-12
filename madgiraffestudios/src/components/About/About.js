import React from 'react';
import photoshoots from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import graphicdesign from '../../Images/aboutPage/graphics/graphic02.png';
import drawing from '../../Images/aboutPage/drawings/lucy_ill.jpeg';

import './About.scss';
const About = () => (

    <React.Fragment>
        <div id="nav-start">%</div>
        <div className="bg-light" id="aboutParent">
            <div className="container pb-2" id="about">
                    <div className="text-center pt-5 mx-auto">
                            <h1 className="font-weight-bold p-3 secondary-color">
                             Mad Giraffe STuDios
                            </h1>  
                    <p className="mb-5 studio-text">
                    There’s no better way to start a conversation than with art. It allows tough conversations to be had, thus allowing us to grow. <br/> Art inspires me to make social change and inspire others to follow suit.
                   </p>
                   
                </div>
            </div>
         
       
      
        <div className="container mt-3" id="aboutlower">

            <div className="row about-content">
                <div className="col-lg-6" id="first">
                    <img src={photoshoots} className="img-fluid rounded float-left about-img" alt="photoshoots" />
                </div>
                <div className="col-lg-6 mt-5 p-3" id="second">

                    <h5 className="font-weight-bold secondary-color description-title" id="photoshoots">Photo Shoots</h5>
                    <p className=" text-muted description-text">
                        At Mad Giraffe Studios, we are dedicated to capturing the moments as imagined, by you! The photo shoot is yours, this is your art. Look your best in a variety of shoots such as product, event and street photography, portraits, and more.
                    </p>
                </div>
               
                <div className="row">
                <div className="col-lg-6" id="first">
                        <img src={graphicdesign} alt="performance" className="img-fluid rounded float-right about-img" />
                    </div>
                    <div className="col-lg-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold secondary-color description-title" id="graphic-design">Graphic Design</h5>
                        <p className="text-muted description-text">Your improvement as a business is our priority. What a business displays is extremely important to how they’re portrayed. Using custom logos, and having a strong social media presence graphically will truly boost a company's brand and popularity.
                        </p>
                    </div>
                    
                  
                </div>


                <div className="row">
                    <div className="col-lg-6" id="first">
                        <img src={drawing} alt="performance" className="img-fluid rounded float-left about-img" />
                    </div>
                    <div className="col-lg-6 mt-5 p-3" id="second">
                        <h5 className="font-weight-bold secondary-color description-title" id="illustrations">Illustrations</h5>
                        <p className="text-muted description-text">Now imagine having a favorite photo of yourself, or a loved one re-imagined through in an Illustration. Choose from a hand drawing, painting or digital art and let us bring your imagination to life.
                        </p>
                    </div>
                </div>
            </div>

        </div>
</div>    
    </React.Fragment>
)


export default About;