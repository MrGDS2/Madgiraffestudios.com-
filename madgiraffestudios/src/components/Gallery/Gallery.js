import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = (props) => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai%26jesse.jpg?alt=media&token=81657299-321c-47bd-b6b0-1bdafe6c43b2' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai%26jesse.jpg?alt=media&token=81657299-321c-47bd-b6b0-1bdafe6c43b2',
      startIndex: 0,
      description: 'We have to remember to be there for each other in these tough times'
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai.jpg?alt=media&token=ac46f638-3b08-4056-a536-a8a33d2db389',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fnai.jpg?alt=media&token=ac46f638-3b08-4056-a536-a8a33d2db389',
      startIndex: 1,
      description: 'We are survivors, healers, lovers, a soul, a friend'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fjesse.jpg?alt=media&token=a154b753-983e-486b-bb39-08ccc25d4b9a',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fjesse.jpg?alt=media&token=a154b753-983e-486b-bb39-08ccc25d4b9a',
      startIndex: 2,
      description: 'The way the world is now and black culture is everywhere, it’s really nice to always be in the conversation'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fcouple2.jpg?alt=media&token=957b0d8f-60dd-4243-89ed-2e31113383d6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fcouple2.jpg?alt=media&token=957b0d8f-60dd-4243-89ed-2e31113383d6',
      startIndex: 3,
      description: 'It’s just accepting them for their whole self, their perfections and imperfections'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdaniel.jpg?alt=media&token=4d7ceb81-786c-4219-a9ca-081ebd2a4902',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fdaniel.jpg?alt=media&token=4d7ceb81-786c-4219-a9ca-081ebd2a4902',
      startIndex: 4,
      description: 'My Blackness motivates me to rise above that societal illness'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fgeorge_yurt.jpg?alt=media&token=77a536e8-4b2f-4d48-8ade-6148072b7a68',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FPhotoshoots%2Fgeorge_yurt.jpg?alt=media&token=77a536e8-4b2f-4d48-8ade-6148072b7a68',
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
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fgraphic04.jpg?alt=media&token=35720591-4ddf-4300-9177-00d4e1b8a726',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fgraphic04.jpg?alt=media&token=35720591-4ddf-4300-9177-00d4e1b8a726',
      startIndex: 7,
      description: 'Open mind but mindful Black Lives Matter'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsketch.jpg?alt=media&token=42518e19-ccd9-4caa-98c9-0809470f3d59',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fsketch.jpg?alt=media&token=42518e19-ccd9-4caa-98c9-0809470f3d59',
      startIndex: 8,
      description: 'Flex ya sketch muscle and doodle!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fwoman_gif.gif?alt=media&token=dcdb081a-e5c2-4e2c-94ea-28cec048186d',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fwoman_gif.gif?alt=media&token=dcdb081a-e5c2-4e2c-94ea-28cec048186d',
      startIndex: 9,
      description: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space.'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2FBLM_gifs.gif?alt=media&token=b22c937a-d9d6-4b19-b1ea-4985b9c869df',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FIllustrations%2Fdrawing01.jpg?alt=media&token=1b472979-1d6d-4e43-9471-771afbd01443',
      startIndex: 10,
      description: 'Just because the media has gotten tired of our fight doesn’t mean we should!'
      
    },

    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbears_arms.png?alt=media&token=160f6581-2a4a-4565-b189-c1b0f220c91d',
      
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/Work%2FGraphics%2Fbears_arms.png?alt=media&token=160f6581-2a4a-4565-b189-c1b0f220c91d',
      startIndex: 11,
      description: '"Bear Arms"'
      
    },



    
  ];

  const galleryImages = gallery.map((img) => 
    <div className="col-md-4 mb-4 image-container img-wrap" key={img.startIndex} onClick={() =>imageClick(img.startIndex)}>
      <img src={img.original} alt={img.description} width="310px" height="380px" className="rounded" />
    <div className="after text-center">
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
      <div className="" id="topParent">
        <div className="container mt-5" id="gallery">
          <div className="text-center  mx-auto w-50">
            <h1 className=" font-weight-bold p-3 mb-5 secondary-color">
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