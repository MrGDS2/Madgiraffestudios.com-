import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { ImPaypal } from "react-icons/im";
import './OrderButton.scss';

const OrderButton =() =>{

  // const [checkout, setCheckOut] = useState(false);

  return(
    <div className="paypal-btn">
      {/* {checkout ? (
        <Paypal/>
      ) : ( */}
      <Button  onClick={()=>{
        // setCheckOut(true);
      }} variant="outline-light" size="lg" className="mb-5" id="order-btn">
          <ImPaypal/> Order Prints</Button>
      {/* )} */}

      </div> 
  )

}
export default OrderButton;