import React, { useState } from 'react';
import firebase from '../../../../../Firebase';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../../LiberteNoire/Paintings/Paintings.scss';
import LikeButton from '../../../../LikeButton/LikeButton';


const Paint2 = () => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [likeCount, setLikedCount]= useState('');
  const [description, setDescription] = useState('');

  firebase.database().ref("Ladies").once("value", snapshot => {
    setName(snapshot.child("name").val());
    setImage(snapshot.child("image").val());
    setLikedCount(snapshot.child("price").val());
    setDescription(snapshot.child("description").val());
  });


  return (
    <React.Fragment>
      <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
        <div className="container ">
          <div className="container pb-5" id="about">
            <div className="text-center pt-5 mx-auto">
              <h1 className="showTitle font-weight-bold p-3 secondary-color">
                Liberté Noir Showcase
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
              <img src={image} className="pic" id="noir-long" alt="main-img" />
            </div>
            <div className="col-3">
              <p className="show-text mb-5 studio-text" id="third">
                {description}
              </p>
              <LikeButton name={"Ladies"}/>
            </div>
          </div>
        </div>
      </Carousel>
    </React.Fragment>

  )

}
export default Paint2;