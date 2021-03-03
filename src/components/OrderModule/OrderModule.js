/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { ImPaypal, ImCart } from "react-icons/im";
import firebase from '../../Firebase';
import { PayPalButton } from "react-paypal-button-v2";
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
import './OrderModule.scss';


const OrderModule = (props) => {

    
    const [modal, setModal] = useState(false);
    const [isVerified, setVerification] = useState(false);
    const [checkout, setCheckOut] = useState(false);


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [sizeOfPrint, setSizeOfPrint] = useState('');
    const [price, setPrice] = useState('');

    const toggle = () => setModal(!modal);

    if (sizeOfPrint !== '') {
        firebase.database().ref('Sizes').child(sizeOfPrint).once("value", snapshot => {
            setPrice(snapshot.val());
            console.log("Size: " + snapshot.val());
        });
    }



    const isEnabled = email.length > 0 && isVerified;
    let emailSent = false;
    const verifyCallback = () => {
        setVerification(true);
    }
    const handleSubmit = () => {
        setModal(!modal);

        let templateParams = {
            name: fullName,
            from_name: email,
            to_name: 'Madgiraffestudios',
            size: sizeOfPrint,
            price: price,
            painting: props.name,
            img: props.image
        }

        handleVerification(templateParams);

    }


    const handleVerification = (templateParams) => {

        if (isVerified) {
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_ORDER_TEMPLATE,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS
            ).then(function (response) {
                console.log("Message sent to Madgiraffe");
                swal({
                    title: `Thank You for your purchase ${fullName}!`,
                    text: `Check your E-mail for shipping updates!`,
                    icon: "success",
                    timer: 5000,
                    buttons: { cancel: null }

                });
                emailSent = true;
            }, function (error) {
                console.log("NO Message sent to Madgiraffe: " + error);
            });
            clearForm();
        }
    }
    const clearForm = () => {
        setFullName('');
        setEmail('');
    }

    return (
        <div>
            <Button type="submit" variant="outline-light" size="lg" className="mb-5" id="order-btn" onClick={toggle} disabled>
                <ImPaypal/> Order Prints</Button>
            <Modal isOpen={modal} toggle={toggle}>

                <div className="modal-head-order">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={() => setModal(!modal)} className="x-btn">&times;</span>
                    </button>
                    <ModalHeader className="bhm-primary text-white">Order Form: {props.name}</ModalHeader>
                </div>
                <ModalBody className="font-weight-bold">
                    <Form>
                        <FormGroup className="form-group required">
                            <Label for="receipient name" className="d-block text-left control-label">Full Name</Label>
                            <Input type="text" name="fullName" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" title="Please put your name for us" required />
                            <FormFeedback>You will not be able to see this</FormFeedback>
                        </FormGroup>
                        <FormGroup className="form-group required">
                            <Label for="email" className="d-block text-left control-label">Email</Label>
                            <Input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email@gmail.com" title="Please put in a valid email address" required />
                        </FormGroup>
                        <FormGroup className="form-group required">
                            <Label for="email" className="d-block text-left control-label">What size would you like?</Label>
                            <Input type="select" name="size" value={sizeOfPrint} onChange={e => setSizeOfPrint(e.target.value)} title="Please tell us what size you would like printed" required>
                                <option></option>
                                <option disabled > -- Select a size for your print -- </option>
                                <option>16 x 20</option>
                                <option>18 X 24</option>
                                <option>30 X 40</option>
                            </Input>
                        </FormGroup>
                        <ReCAPTCHA className="mb-4 d-flex justify-content-center"
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            onChange={verifyCallback}
                        />
                        <p className="checkout-txt">Checkout Total: ${price} </p>
                        <div className="paypal-btn">
                            {checkout ? (
                                <PayPalButton
                                    amount={price}
                                
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={(details, data) => {
                                        //send email to user and business
                                        handleSubmit();
                                        if(!emailSent) {
                                            swal({
                                                title: `Thank You for your purchase ${fullName}!`,
                                                text: `We are working on your order now`,
                                                icon: "success",
                                                timer: 5000,
                                                buttons: { cancel: null }
                            
                                            });
                                            console.log("NO Email sent!");
                                         }else console.log("Email sent!");
                                        // OPTIONAL: Call your server to save the transaction
                                        return fetch("/paypal-transaction-complete", {
                                            method: "post",
                                            body: JSON.stringify({
                                                orderID: data.orderID
                                            })
                                        });

                                    }}
                                    catchError={(err) => {
                                        console.log("FAILED: " + err);
                                        swal({
                                            title: "Oops!",
                                            text: "Payment not sent please check user account or select a different form of payment",
                                            icon: "error",
                                            timer: 5000,
                                            buttons: { cancel: null }
                                        })
                                    }}
                                />
                            ) : (

                                    <div className="container " id="checkout-btn">
                                        <Button onClick={() => {
                                            setCheckOut(true);
                                        }} size="lg" className="mb-5" disabled={!isEnabled} >
                                            Checkout <ImCart /></Button>
                                    </div>

                                )}

                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default OrderModule;