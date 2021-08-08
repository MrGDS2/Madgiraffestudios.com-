import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import Pulse from 'react-reveal/Pulse';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = () => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2Ftouch_remastered.png?alt=media&token=6fe8e559-4e5b-4405-b5f3-fb272d8827bd' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2Ftouch_remastered.png?alt=media&token=6fe8e559-4e5b-4405-b5f3-fb272d8827bd',
      startIndex: 0,
      description: 'A true connection between two hearts...'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FneckGrab.jpg?alt=media&token=9b8146a4-63b1-4b68-9bc7-c01aff9c4cf9',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FneckGrab.jpg?alt=media&token=9b8146a4-63b1-4b68-9bc7-c01aff9c4cf9',
      startIndex: 1,
      description: 'Love Language: Touch'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fyou_are_enough.jpg?alt=media&token=da8c06dc-66fa-43b0-a638-2312979c80b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fyou_are_enough.jpg?alt=media&token=da8c06dc-66fa-43b0-a638-2312979c80b8',
      startIndex: 2,
      description: 'Love > Hate'
      
    },
    {
      
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhoney-0001.png?alt=media&token=2400a651-80d1-4de7-99bb-f54995c12e5c',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhoney-0001.png?alt=media&token=2400a651-80d1-4de7-99bb-f54995c12e5c',
      startIndex: 3,
      description: 'Friendly reminder that everything in earth is connected. We need bees just as much as we need water. Respect nature.'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhair.jpg?alt=media&token=67ed1c59-dd16-41ce-a243-e77faf1f6ca6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fhair.jpg?alt=media&token=67ed1c59-dd16-41ce-a243-e77faf1f6ca6',
      startIndex: 4,
      description: 'We’ve all been here in one form or another'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchForhead.jpg?alt=media&token=3a6bf83b-97d1-4514-a22b-d63d73ab48a0',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2FtouchForhead.jpg?alt=media&token=3a6bf83b-97d1-4514-a22b-d63d73ab48a0',
      startIndex: 5,
      description: 'We have a will to carry on...to be better and do more'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftongue.jpg?alt=media&token=4f568566-808a-44bb-b4a9-576d851e64e5',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Ftongue.jpg?alt=media&token=4f568566-808a-44bb-b4a9-576d851e64e5',
      startIndex: 6,
      description: `Goofy, is a love language`
      
    },
	

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbodpositivity3.jpg?alt=media&token=156099f7-c726-4e42-90e7-028fbcb1f07c',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbodpositivity3.jpg?alt=media&token=156099f7-c726-4e42-90e7-028fbcb1f07c',
      startIndex: 7,
      description: 'We are all BEAUTIFUL in our natural forms!'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fblck_wraps.jpg?alt=media&token=c516fa2c-d107-4b30-a682-8c484c416a7c',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fblck_wraps.jpg?alt=media&token=c516fa2c-d107-4b30-a682-8c484c416a7c',
      startIndex: 8,
      description: 'Ladies Of Culture'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2FBW.jpeg?alt=media&token=6c1d0ad1-fddd-4369-99d3-d9c216ee6685',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2FBW.jpeg?alt=media&token=6c1d0ad1-fddd-4369-99d3-d9c216ee6685',
      startIndex: 9,
      description: 'Love Conquers All✊🏾✊🏿✊🏽'
      
    },
 
  {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Flil_gal.jpg?alt=media&token=a0abf823-40f7-4118-9ce1-82df4d67288b',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Flil_gal.jpg?alt=media&token=a0abf823-40f7-4118-9ce1-82df4d67288b',
      startIndex: 10,
      description: 'It’s all about joy! Look into the void and remember a time in your childhood when you were this happy!'
      
    }, 
      {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fwhite_girl.jpg?alt=media&token=0fdf7f9c-4b47-4bc8-99bf-a589706f475e',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fwhite_girl.jpg?alt=media&token=0fdf7f9c-4b47-4bc8-99bf-a589706f475e',
      startIndex: 11,
      description: 'Always Choose Adventure!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdoggy2.jpeg?alt=media&token=1a8a4b85-4dea-4d6f-9200-2d71a9aefdea',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdoggy2.jpeg?alt=media&token=1a8a4b85-4dea-4d6f-9200-2d71a9aefdea',
      startIndex: 12,
      description: 'Adopt!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdoggy.jpg?alt=media&token=f7441fbe-00e9-4d8e-8314-b3682b072ad1',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdoggy.jpg?alt=media&token=f7441fbe-00e9-4d8e-8314-b3682b072ad1',
      startIndex: 13,
      description: 'Always Smile!'
      
    },


    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdog2.jpeg?alt=media&token=7a36c665-06c8-465f-885b-83ae2a7b9fcd',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdog2.jpeg?alt=media&token=7a36c665-06c8-465f-885b-83ae2a7b9fcd',
      startIndex: 14,
      description: 'Curieuse Chien!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fblks.jpeg?alt=media&token=91a1ea45-efcf-4a32-90b5-950fb93494c9',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fblks.jpeg?alt=media&token=91a1ea45-efcf-4a32-90b5-950fb93494c9',
      startIndex: 15,
      description: 'Step and Stroll'
      
    },
    {
         original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2F2021%2Fnai.jpg?alt=media&token=df6a4940-b995-4284-a11a-fa9d73c13f84',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2F2021%2Fnai.jpg?alt=media&token=df6a4940-b995-4284-a11a-fa9d73c13f84',
      startIndex: 16,
      description: 'We are survivors, healers, lovers, a soul, a friend.'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2F2021%2Ftara_brandon.jpg?alt=media&token=cecca460-8cd0-4c7c-a324-8e9e2d4d1eda',
   
   thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2F2021%2Ftara_brandon.jpg?alt=media&token=cecca460-8cd0-4c7c-a324-8e9e2d4d1eda',
   startIndex: 17,
   description: 'Black Love'
   
   },
   
   {
    original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2FWildSide.jpg?alt=media&token=5c1d579c-afd1-45cc-a499-79bcc8360109',
    
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2FWildSide.jpg?alt=media&token=5c1d579c-afd1-45cc-a499-79bcc8360109',
    startIndex: 18,
    description: 'Event Poster for Student Formal'
    
  },
  {
       original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2FGameGillion.jpg?alt=media&token=fb256ac1-85de-42c3-816e-f67a055a5cb4',
    
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2FGameGillion.jpg?alt=media&token=fb256ac1-85de-42c3-816e-f67a055a5cb4',
    startIndex: 19,
    description: 'Game Gillion logo on Tik Tok'
    
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2Fwoman01.jpg?alt=media&token=9a80e5c2-287b-490d-8d96-dffbf4270801',
 
 thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2F2021Icons%2Fwoman01.jpg?alt=media&token=9a80e5c2-287b-490d-8d96-dffbf4270801',
 startIndex: 20,
 description: 'A Queen will defend her kingdom!'
 
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
          <Pulse>
          <div className="row gallery-row" >
              {galleryImages}
          </div>
          </Pulse>
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