import React, { useState } from 'react';
import firebase from '../../../../../Firebase';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../../LiberteNoire/Paintings/Paintings.scss';
import LikeButton from '../../../../LikeButton/LikeButton';
import OrderModule from '../../../../OrderModule/OrderModule';
import FadeIn from 'react-fade-in';


const Paint1 = () => {


  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [show, setShowName] = useState('');

  firebase.database().ref("Grown").once("value", snapshot => {
    setName(snapshot.child("name").val());
    setImage(snapshot.child("image").val());
    setDescription(snapshot.child("description").val());
  });

  firebase.database().ref("ShowCover").once("value", snapshot => {
    setShowName(snapshot.child("Title").val());
  });


  return (
    <React.Fragment>

      <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
        <FadeIn transitionDuration="1000">
          <div className="container ">
            <div className="container pb-5" id="about">
              <div className="text-center pt-5 mx-auto">
                <h1 className="showTitle font-weight-bold p-3 secondary-color">
                  {show}
                </h1>
              </div>
            </div>
            <div className="row mt-5 pb-5">
              <div className="col-5">
                <h1 className="align-me font-weight-bold p-3 secondary-color" id="noir-title">
                  {name}
                </h1>
              </div>
              <div className="col-4" >
                <img src={image} id="noir-img" alt="main-img" />

              </div>
              <div className="col-3">
                <p className="show-text mb-5 studio-text">
                  {description}
                </p>
                <OrderModule name={name} image={image} />
                <LikeButton name={"Grown"} />

              </div>
            </div>

          </div>
        </FadeIn>
      </Carousel>
    </React.Fragment>
  )

}
export default Paint1;