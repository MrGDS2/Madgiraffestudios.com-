import React, {useState, useImperativeHandle, forwardRef} from 'react';
import * as emailjs from 'emailjs-com';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
import './Booking.scss'

const Booking= forwardRef((props,ref) => {

    const [displayModal, setDisplayModal] = useState(false);
    const [isVerified,setVerification]= useState(false);

    const showModal = () => {
       setDisplayModal(true);
    };
  
    useImperativeHandle(ref, () => {
      return {
        showModal: showModal
        
      };
    });
  

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState ('');
const [phone, setPhone] = useState ('');
const [subject, setSubject] = useState ('');
const [message, setMessage] = useState ('');


const isEnabled=email.length>0 && isVerified;

 const verifyCallback= ()=>{
   setVerification(true);
 }
 const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisplayModal(false);

    let templateParams = {
      name: fullName,
      phone: phone, 
      from_name: email,
      to_name: 'Madgiraffestudios@gmail.com',
      subject: subject,
      message: message,
     }
    
     handleVerification(templateParams);

}


const handleVerification=(templateParams)=>{
     
     if(isVerified){
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE,
         templateParams,
         process.env.REACT_APP_USER_ID_EMAILJS
       ).then(function(response) {
        swal({
          title: "Message on the way!",
          text: `We can't wait to work with you, ${fullName}!`,
          icon: "success",
          timer: 5000,
          buttons: { cancel: null }
         
        })
   
  
     }, function(error) {
       swal({
          title: "Oops!",
          text: `Message not sent please email us directly: ${templateParams.to_name}`,
          icon: "error",
          timer: 5000,
          buttons: { cancel: null }
        })
      
    });
      clearForm();
     }   
}
 const clearForm= ()=>{

  setFullName('');
  setEmail('');
  setPhone('');
  setSubject('');
  setMessage('');
 }



      return (
        <Modal isOpen={displayModal} toggle={() =>setDisplayModal(false)}   className="mt-5 text-center">

        <div className="modal-head">
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" onClick={() =>setDisplayModal(false)} className="x-btn">&times;</span>
         </button>
        <ModalHeader className="bg-primary text-white">Let's Work Together!</ModalHeader> 
      </div>

         <ModalBody className="font-weight-bold">
         <Form onSubmit={handleSubmit} >
                 <FormGroup className="form-group required">
                     <Label for="receipient name" className="d-block text-left control-label">Full Name</Label>
                     <Input type="text" name="fullName" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Your name" title="Please put your name for us" required />
                     <FormFeedback>You will not be able to see this</FormFeedback>
                 </FormGroup>
                 <FormGroup className="form-group required">
                     <Label for="email" className="d-block text-left control-label">Email</Label>
                     <Input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email@gmail.com" title="Please put in a valid email address" required />
                 </FormGroup>
                 <FormGroup >
                     <Label for="phone" className="d-block text-left">Phone</Label>
                     <PhoneInput placeholder="Example +1 914 208 9937"value={phone} onChange={setPhone}/>
                 </FormGroup>
                 <FormGroup className="form-group required">
                     <Label for="email" className="d-block text-left control-label">What would you like?</Label>
                     <Input type="select" name="subject" value={subject} onChange={e=>setSubject(e.target.value)} title="Please tell us what you would like done" required>
                     <option></option>
                     <option disabled > -- select an option -- </option>
                         <option>Photo Shoot</option>
                         <option>Graphic Design</option>
                         <option>Illustration</option>
                         <option >Painting</option>
                         <option>Other</option>
                     </Input>
                 </FormGroup>
     
                 <FormGroup className="form-group required">
                     <Label for="message" className="d-block text-left control-label">Description</Label>
                     <Input type="textarea"  name="message" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us more of what you want" id="modal-textarea" title="Please describe what you would like done" required/>
                 </FormGroup> 
                 <ReCAPTCHA className="mb-4 d-flex justify-content-center"
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={verifyCallback}
                 />
                 <Button type="submit" disabled={!isEnabled}>Submit</Button> 
             </Form>
         </ModalBody>
         <ModalFooter>
         </ModalFooter>
     </Modal>  
      )
      
});
      
      
  export default Booking;  
  