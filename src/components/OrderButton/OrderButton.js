import React from 'react';
import { Button } from 'react-bootstrap';
import { ImPaypal } from "react-icons/im";
import './OrderButton.scss';

const OrderButton =() =>{

  return(
    <Button type="submit" variant="outline-light" size="lg" className="mb-5" id="order-btn"><ImPaypal/> Order Prints</Button>
  )

}
export default OrderButton;