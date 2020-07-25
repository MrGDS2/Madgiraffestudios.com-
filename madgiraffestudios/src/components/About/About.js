import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';
import photoshoots from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import graphicdesign from '../../Images/aboutPage/graphics/graphic.jpg';
import uxDesin from '../../Images/aboutPage/ux/undraw_mobile_ux.png'
import drawing from '../../Images/aboutPage/drawings/drawing01.jpg'
import './About.scss';
const About = () => (
    <div className="container" id="about">
        <div className=" text-center pt-5 mx-auto w-50 ">
            <h1 className="primary-color font-weight-bold p-3">Mad Giraffe STuDios</h1>
            <p className="font-weight-900 mb-5">
                The best way to spark change is to start a conversation and there’s no better way to start conversation than with art. I have always found the best way to communicate with others is through art, it allows tough conversations to be had and tough topics to be learned. Art inspires me to make social change and it inspires others to truly think. 
            </p>
             </div>
         <div className="row about-content">
             <div className="col-md-6" id="first">
             <img src={photoshoots} className="img-fluid rounded float-left" alt="Responsive image"/>
             </div>
             <div className="col-md-6 mt-5 p-3" id="second">
                 <h5 className="font-weight-bold primary-color">PhotoShoots</h5><p className="w-75 text-muted">At TotalKnockoutFitness we are dedicated to helping you achieve your personal goals. With our 24/7 online community, we seek to provide you with not only the support but the accountability you need to stay disciplined and committed to your goals.</p></div><div></div>
                  
                  <div className="row">
                     <div className="col-md-6 mt-5 p-3" id="second">
                         <h5 className="font-weight-bold primary-color">Graphic Design</h5><p className="w-75 text-muted">Your improvement is our priority. Each of our fitness programs are geared towards helping you improve your performance and move closer to your goals everyday. You take the first step by joining freea today and we do the rest to help keep you on track. </p>
                         </div>
                         <div className="col-md-6" id="first">
                         <img src={graphicdesign} alt="performance" className="img-fluid rounded float-right"/>
                         </div>
                         </div>
                         
                        
                         <div className="row">
                            <div className="col-md-6" id="first"> 
                            <img src={drawing} alt="performance"className="img-fluid rounded float-left"/>
                           </div> 
                           <div className="col-md-6 mt-5 p-3" id="second">
                             <h5 className="font-weight-bold primary-color">Illustrations</h5>
                           <p className="w-75 text-muted">Everyone seeks to live their best life, doing what they love to do with the people they love most. Now imagine doing all of that at your optimum health. Well you don't have to imagine. Get started today and a healthy lifestyle no longer has to be your fantasy but can be your reality.
                           </p>
                           </div>
                           </div>
             </div>
             </div>

)


export default About;