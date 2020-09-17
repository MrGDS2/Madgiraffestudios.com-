import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = () => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0176.jpg?alt=media&token=ef2452b1-85da-40b0-a527-bb9861bd4a2b' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0176.jpg?alt=media&token=ef2452b1-85da-40b0-a527-bb9861bd4a2b',
      startIndex: 0,
      description: 'We have to remember to be there for each other in these tough times'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0084.jpg?alt=media&token=cc154265-98d4-4b85-8ab7-a607f5cd304f',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0084.jpg?alt=media&token=cc154265-98d4-4b85-8ab7-a607f5cd304f',
      startIndex: 1,
      description: 'We are survivors, healers, lovers, a soul, a friend'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0156.jpg?alt=media&token=7ff65436-ad49-4379-b0d8-a777708b70b1',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0156.jpg?alt=media&token=7ff65436-ad49-4379-b0d8-a777708b70b1',
      startIndex: 2,
      description: 'The way the world is now and black culture is everywhere, it’s really nice to always be in the conversation'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0064.jpg?alt=media&token=61994a40-6007-4737-acdf-058cb814a778',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fcouple_small.png?alt=media&token=27dd3f0c-77d0-4a78-87dd-ea14e1c97d65',
      startIndex: 3,
      description: 'It’s just accepting them for their whole self, their perfections and imperfections'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0215.jpg?alt=media&token=ffd46de6-8cad-4882-840f-db3d6448a147',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2F_DSC0215.jpg?alt=media&token=ffd46de6-8cad-4882-840f-db3d6448a147',
      startIndex: 4,
      description: 'My Blackness motivates me to rise above that societal illness'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2FIMG_7902_small.png?alt=media&token=8d16fc90-1ab5-4e3b-a0a2-8852edf76c74',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fsmall%2FIMG_7902_small.png?alt=media&token=8d16fc90-1ab5-4e3b-a0a2-8852edf76c74',
      startIndex: 5,
      description: 'We have a will to carry on...to be better and do more because you’re born with a handicap'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fembosed-logo-mockup.jpg?alt=media&token=4c505361-c786-42ce-bd97-b7e8d9fb89f6',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fembosed-logo-mockup.jpg?alt=media&token=4c505361-c786-42ce-bd97-b7e8d9fb89f6',
      startIndex: 6,
      description: `Custom  company logo on cardstock`
      
    },
	

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FLabel-Brand-Mockup-vol7_small.jpg?alt=media&token=27fa9375-b9aa-47bd-8ca8-3c3c84edb06f',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FLabel-Brand-Mockup-vol7_small.jpg?alt=media&token=27fa9375-b9aa-47bd-8ca8-3c3c84edb06f',
      startIndex: 7,
      description: 'Save the Bees, They make our Honey!'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FmrS.jpg?alt=media&token=bc6e0dab-fc5e-4b0a-aa04-78d580c7cd77',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FmrS.jpg?alt=media&token=bc6e0dab-fc5e-4b0a-aa04-78d580c7cd77',
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
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsmall%2FBLM_gifs_sm_fst.gif?alt=media&token=7485d541-cd03-4f15-a927-5215507fe39e',
      
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