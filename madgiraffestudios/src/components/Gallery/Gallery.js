import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = () => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai%26jesse_sm_redo.png?alt=media&token=494c97c3-e79a-41c0-8b02-a267a6607bf3' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai%26jesse_sm_redo.png?alt=media&token=494c97c3-e79a-41c0-8b02-a267a6607bf3b',
      startIndex: 0,
      description: 'We have to remember to be there for each other in these tough times'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai_small.png?alt=media&token=6ddfa01a-f8a1-470e-a9cc-a2c86f7afead',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai_small.png?alt=media&token=6ddfa01a-f8a1-470e-a9cc-a2c86f7afead',
      startIndex: 1,
      description: 'We are survivors, healers, lovers, a soul, a friend'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fjesse_small.png?alt=media&token=439bac61-d1a2-4992-a1d2-ca930bf48714',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fjesse_small.png?alt=media&token=439bac61-d1a2-4992-a1d2-ca930bf48714',
      startIndex: 2,
      description: 'The way the world is now and black culture is everywhere, it’s really nice to always be in the conversation'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fcouple_small.png?alt=media&token=27dd3f0c-77d0-4a78-87dd-ea14e1c97d65',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fcouple_small.png?alt=media&token=27dd3f0c-77d0-4a78-87dd-ea14e1c97d65',
      startIndex: 3,
      description: 'It’s just accepting them for their whole self, their perfections and imperfections'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdaniel_small.png?alt=media&token=b5dbe02a-af99-4e23-8453-d1265c42c292',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdaniel_small.png?alt=media&token=b5dbe02a-af99-4e23-8453-d1265c42c292',
      startIndex: 4,
      description: 'My Blackness motivates me to rise above that societal illness'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fgeorge_yurt_small.png?alt=media&token=4d1f748c-02ca-4aa4-b4ab-279be9e9f63b',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fgeorge_yurt_small.png?alt=media&token=4d1f748c-02ca-4aa4-b4ab-279be9e9f63b',
      startIndex: 5,
      description: 'We have a will to carry on...to be better and do more because you’re born with a handicap'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftara-logo.png?alt=media&token=12119106-11c4-444e-9b98-8b77f127b812',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftara-logo.png?alt=media&token=12119106-11c4-444e-9b98-8b77f127b812',
      startIndex: 6,
      description: 'Logo for Necessary Economic Trust'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FLabel-Brand-Mockup-vol7.png?alt=media&token=76ad14d4-c4b8-4e86-bf1e-496d47ecd4fa',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FLabel-Brand-Mockup-vol7.png?alt=media&token=76ad14d4-c4b8-4e86-bf1e-496d47ecd4fa',
      startIndex: 7,
      description: 'Save the Bees, They make our Honey!'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FUntitled-1.png?alt=media&token=06283aed-af99-437a-ab8b-3151b28bb693',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FUntitled-1.png?alt=media&token=06283aed-af99-437a-ab8b-3151b28bb693',
      startIndex: 8,
      description: 'Gaming icon for streamer on Twitch: Mrgds2'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fwoman_gif.gif?alt=media&token=ecf63d90-5801-4228-9b0e-2618d4b5ce39',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fwoman_gif.gif?alt=media&token=ecf63d90-5801-4228-9b0e-2618d4b5ce39',
      startIndex: 9,
      description: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space.'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2FBLM_gifs_small.gif?alt=media&token=18fed372-f667-421b-bb46-7c60de5790f2',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fdrawing01.jpg?alt=media&token=1b472979-1d6d-4e43-9471-771afbd01443',
      startIndex: 10,
      description: 'Just because the media has gotten tired of our fight doesn’t mean we should!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbears_arms_small.png?alt=media&token=749cd609-488f-467e-83a0-56e96983140f',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbears_arms.png?alt=media&token=160f6581-2a4a-4565-b189-c1b0f220c91d',
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
      <div id="gallery">
        <div className="container mt-5" id="gallery">
          <div className="text-center  mx-auto w-50 ">
            <h1 className=" font-weight-bold p-3 mb-5 secondary-color gallery-header">
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
        <ImageGallery items={gallery}  thumbnailPosition= 'right' showBullets="true" startIndex={imageIndex} />
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={() => setModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>

    </React.Fragment>
  )
}

export default Gallery;