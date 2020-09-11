import React, { Component,useState,useRef,useImperativeHandle,forwardRef} from 'react';
import * as emailjs from 'emailjs-com';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import swal from 'sweetalert';
import './Booking.scss'

const Booking= forwardRef((props,ref) => {

    const [displayModal, setDisplayModal] = useState(false);
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
        dangerMode: false
      })
 

   }, function(error) {
     swal({
        title: "Oops!",
        text: `Message not sent please email us directly: ${templateParams.to_name}`,
        icon: "error",
        dangerMode: true
      })
    
  });

   clearForm();

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
        <ModalHeader className="bg-primary text-white">Let's Work Together!</ModalHeader>
         <ModalBody className="font-weight-bold">
         <Form onSubmit={handleSubmit} >
                 <FormGroup>
                     <Label for="receipient name" className="d-block text-left">Full Name</Label>
                     <Input type="text" name="fullName" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Your name" required/>
                     <FormFeedback>You will not be able to see this</FormFeedback>
                 </FormGroup>
                 <FormGroup>
                     <Label for="email" className="d-block text-left">Email</Label>
                     <Input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email@gmail.com" />
                 </FormGroup>
                 <FormGroup>
                     <Label for="phone" className="d-block text-left">Phone</Label>
                     <Input type="tel" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(917)-000-0000" />
                 </FormGroup>
                 <FormGroup>
                     <Label for="email" className="d-block text-left">What would you like?</Label>
                     <Input type="select"  name="subject" value={subject} onChange={e=>setSubject(e.target.value)} >
                         <option>Choose One</option>
                         <option>Photo Shoot</option>
                         <option>Graphic Design</option>
                         <option>Illustration</option>
                     </Input>
                 </FormGroup>
     
                 <FormGroup>
                     <Label for="message" className="d-block text-left">Description</Label>
                     <Input type="textarea"  name="message" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us more of what you want" id="modal-textarea"/>
                 </FormGroup> 
                 <Button type="submit">Submit</Button> 
             </Form>
         </ModalBody>
         <ModalFooter>
         </ModalFooter>
     </Modal>
             
      )
      
});
      
      
  export default Booking;  