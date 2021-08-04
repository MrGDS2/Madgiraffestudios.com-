import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = () => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchHands.jpg?alt=media&token=8b61b335-f8f1-4b12-ad52-80a629a36fe3' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchHands.jpg?alt=media&token=8b61b335-f8f1-4b12-ad52-80a629a36fe3',
      startIndex: 0,
      description: 'We have to remember to be there for each other in these tough times'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FneckGrab.jpg?alt=media&token=9b8146a4-63b1-4b68-9bc7-c01aff9c4cf9',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FneckGrab.jpg?alt=media&token=9b8146a4-63b1-4b68-9bc7-c01aff9c4cf9',
      startIndex: 1,
      description: 'We are survivors, healers, lovers, a soul, a friend'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fyou_are_enough.jpg?alt=media&token=da8c06dc-66fa-43b0-a638-2312979c80b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fyou_are_enough.jpg?alt=media&token=da8c06dc-66fa-43b0-a638-2312979c80b8',
      startIndex: 2,
      description: 'The way the world is now and black culture is everywhere, it’s really nice to always be in the conversation'
      
    },
    {
      
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhoney-0001.png?alt=media&token=2400a651-80d1-4de7-99bb-f54995c12e5c',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhoney-0001.png?alt=media&token=2400a651-80d1-4de7-99bb-f54995c12e5c',
      startIndex: 3,
      description: 'It’s just accepting them for their whole self, their perfections and imperfections'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhair.jpg?alt=media&token=67ed1c59-dd16-41ce-a243-e77faf1f6ca6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhair.jpg?alt=media&token=67ed1c59-dd16-41ce-a243-e77faf1f6ca6',
      startIndex: 4,
      description: 'My Blackness motivates me to rise above that societal illness'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchForhead.jpg?alt=media&token=3a6bf83b-97d1-4514-a22b-d63d73ab48a0',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchForhead.jpg?alt=media&token=3a6bf83b-97d1-4514-a22b-d63d73ab48a0',
      startIndex: 5,
      description: 'We have a will to carry on...to be better and do more because you’re born with a handicap'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftongue.jpg?alt=media&token=4f568566-808a-44bb-b4a9-576d851e64e5',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftongue.jpg?alt=media&token=4f568566-808a-44bb-b4a9-576d851e64e5',
      startIndex: 6,
      description: `Custom  company logo on cardstock`
      
    },
	

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbodpositivity3.jpg?alt=media&token=156099f7-c726-4e42-90e7-028fbcb1f07c',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbodpositivity3.jpg?alt=media&token=156099f7-c726-4e42-90e7-028fbcb1f07c',
      startIndex: 7,
      description: 'Save the Bees, They make our Honey!'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fblck_wraps.jpg?alt=media&token=c516fa2c-d107-4b30-a682-8c484c416a7c',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fblck_wraps.jpg?alt=media&token=c516fa2c-d107-4b30-a682-8c484c416a7c',
      startIndex: 8,
      description: 'Gaming icon for streamer on Twitch: Mrgds2'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsmall%2Fwoman_gif_sm.gif?alt=media&token=81e7e2b6-e54b-475b-ba9f-1329bad560ce',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fwoman_gif.gif?alt=media&token=ecf63d90-5801-4228-9b0e-2618d4b5ce39',
      startIndex: 9,
      description: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space.'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbodpositivity3.jpg?alt=media&token=156099f7-c726-4e42-90e7-028fbcb1f07c',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fdrawing01.jpg?alt=media&token=1b472979-1d6d-4e43-9471-771afbd01443',
      startIndex: 10,
      description: 'Just because the media has gotten tired of our fight doesn’t mean we should!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsmall%2Fbears_arms.png?alt=media&token=e56f12eb-a329-4bee-9f09-af14b759f7d8',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsmall%2Fbears_arms.png?alt=media&token=e56f12eb-a329-4bee-9f09-af14b759f7d8',
      startIndex: 11,
      description: 'The right of the people to keep and "Bear Arms"'
      
    },



    
  ];

  const galleryImages = gallery.map((img) => 
    <div className="col-md-4 mb-4 image-container img-wrap img-gallery" key={img.startIndex} onClick={() =>imageClick(img.startIndex)}>
      <img src={img.original} alt={img.description} className="img-fluid rounded" />
    <div className="img-description text-center img-fluid mx-auto">
      <span >{img.description}</span>
    </div>
  </div>

  );


  const [modal, setModal] = useState(false);
  const [imageIndex, setImgIndex] = useState();
 
  const imageClick= (index) => {
    setModal(true);
    setImgIndex(index);
  }
  return (
    <React.Fragment>
      <div  id="gallery">
        <div className="container mt-5">
          <div className="text-center  mx-auto w-50 ">
            <h1 className="font-weight-bold p-3 secondary-color">
              Gallery</h1>
          </div>
          <div className="row gallery-row" >
              {galleryImages}
          </div>
        </div>
      </div>

    <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>Gallery</ModalHeader>
        <ModalBody>
        <ImageGallery items={gallery}  thumbnailPosition= 'right' startIndex={imageIndex} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>

    </React.Fragment>
  )
}

export default Gallery;