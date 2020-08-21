import React, { useState } from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Gallery = (props) => {

  const gallery = [
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/nai_shoot.jpg?alt=media&token=5feb0e35-321c-4948-8f69-0f99f4e87b25' ,
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/nai_shoot.jpg?alt=media&token=5feb0e35-321c-4948-8f69-0f99f4e87b25',
      startIndex: 0,
      description: 'Nothing is ever black, white or gray. Let your colors shine! '
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/couple.jpg?alt=media&token=26bb85a4-956c-465e-a17b-06fb91120650',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/couple.jpg?alt=media&token=26bb85a4-956c-465e-a17b-06fb91120650',
      startIndex: 1,
      description: 'Strong Black Love'
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      startIndex: 2,
      description: 'A melanin queen '
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      startIndex: 2,
      description: 'A melanin queen '
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      startIndex: 2,
      description: 'A melanin queen '
      
    },
    {
      original: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/madgiraffestudiossite.appspot.com/o/beach_shoot2.jpg?alt=media&token=0a46be1f-98ce-4cd9-b878-16aded6a43b8',
      startIndex: 2,
      description: 'A melanin queen '
      
    },
    
    

  ];

  const galleryImages = gallery.map((img) => 
    <div className="col-md-4 mb-4 image-container img-wrap" key={img.startIndex} onClick={() =>imageClick(img.startIndex)}>
      <img src={img.original} alt={img.description} width="310px" height="380px" className="rounded" />
    <div class="after">
      <span>{img.description}</span>
    </div>
  </div>

  );


  const [modal, setModal] = useState(false);
  const [imageIndex, setImgIndex] = useState();
  const toggle = () => setModal(!modal);
  const imageClick= (index) => {
    setModal(true);
    setImgIndex(index);
  }
  return (
    <React.Fragment>
      <div className="bg-light" id="topParent">
        <div className="container gallery" id="gallery">
          <div className="text-center pt-5 mx-auto w-50">
            <h1 className=" font-weight-bold p-3 mb-5 secondary-color">
              Gallery</h1>
          </div>
          <div className="row gallery-row" >
              {galleryImages}
          </div>
        </div>
      </div>
);
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