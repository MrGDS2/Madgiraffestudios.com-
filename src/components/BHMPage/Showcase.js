import React, { useState } from 'react';
import firebase from '../../Firebase';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LikeButton from '../LikeButton/LikeButton';
import './Showcase.scss';
import EnterGallery from '../EnterGalleryButton/EnterGalleryButton';
import FadeIn from 'react-fade-in';
const Showcase = () => {


  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  firebase.database().ref("ShowCover").once("value", snapshot => {
    setName(snapshot.child("Title").val());
    setImage(snapshot.child("CoverImg").val());
    setLocation(snapshot.child("Location").val());
    setDescription(snapshot.child("description").val());
  });


  return (
    <React.Fragment>
      <FadeIn>
        <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>

          <div className="container ">
            <div className="container pb-5" id="about">
              <div className="text-center pt-5 mx-auto">
                <h1 className="showTitle font-weight-bold p-3 secondary-color">
                  {name}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-2 enterShow-col" id="blm-description">
                <div className="mb-5 blm-text blm-des">{description}</div>
                <div id="enter-btn"> <EnterGallery /></div>
              </div>
              <div className="col-8" id="blm-img" >
                <img src={image} id="blmIMG" alt="main-img" />
                {/* donate button */}

              </div>

              <div className="col-2 " id="blm-local" >
                <div className="blm-text localText">Location:</div>
                <div className="mb-5 blm-text blm-local">{location}</div>
                <div id="blm-heart">
                  <LikeButton name={"ShowCover"} />
                </div>

              </div>



            </div>
          </div>

        </Carousel>
      </FadeIn>
    </React.Fragment>
  )

}
export default Showcase;