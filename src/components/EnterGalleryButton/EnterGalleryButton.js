import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { RiGalleryFill } from "react-icons/ri";
import '../OrderModule/OrderModule.scss';

const EnterGallery =() =>{

  let history =useHistory();

  const goToShow=()=>{
    history.push("/LiberteNoir/Gallery");
  }
  return(
    <div>
    
      <Button onClick={goToShow} variant="outline-light" size="lg" className="mb-5" id="entr-btn">
          <RiGalleryFill/> Enter Showcase</Button>
     

      </div> 
  )

}
export default EnterGallery;