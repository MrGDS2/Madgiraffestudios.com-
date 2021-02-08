import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { RiGalleryFill } from "react-icons/ri";
import '../OrderModule/OrderModule.scss';
import ReactGA from 'react-ga';

const EnterGallery = () => {

  let history = useHistory();

  const goToShow = () => {
    history.push('/LiberteNoire/Gallery');
  }

  return (
    <div>

      <Button type="submit" onClick={goToShow} variant="outline-light" size="lg" className="mb-5">
        <RiGalleryFill /> Enter Showcase</Button>


    </div>
  )

}
export default EnterGallery;