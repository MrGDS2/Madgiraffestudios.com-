import React, { useState } from 'react';
import Painter from '../../Images/landing-img.jpeg'
import About from '../About/About';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormFeedback, Label, FormText, Input, FormGroup, Button } from 'reactstrap';

const Home = () => {
    const [displayModal, setDisplayModal] = useState(false)
    return (
        <React.Fragment>

            <div className="main-page" id="home">
                <div className="row mx-5 pt-4 elevator-pitch">
                    <div className="col-md-10 col-xs-12 mt-5 ">
                        <strong><p className="emphasized-text">The best way to spark change</p></strong>
                        <strong><p className="emphasized-text">is to start a conversation.</p></strong>
                        <h5>I try to capture the in between moments, the moments that most people take for granted.</h5>
                        <h5>Stories are not told they are assumed. <span className="oblique-text">~Kae, Creative Owner</span></h5>
                        <button type="button" className="btn btn-lg shadow-lg booking-btn mt-3 mb-5 p-3" onClick={() => setDisplayModal(true)}>Book Me</button>
                    </div>
                    <div className="col-md-2 painter-img mt-5">
                        <img src={Painter} alt="painter" height="360px" />
                    </div>
                </div>
            </div>
            <Modal isOpen={displayModal} className="mt-5 text-center">
               <ModalHeader className="bg-primary text-white">Let's Work Together!</ModalHeader>
                <ModalBody className="font-weight-bold">
                    <Form>
                        <FormGroup>
                            <Label for="receipient name" className="d-block text-left">Fullname</Label>
                            <Input />
                            <FormFeedback>You will not be able to see this</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className="d-block text-left">Email</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject" className="d-block text-left">Subject</Label>
                            <Input type="textarea" id="modal-textarea"/>
                        </FormGroup>
                        <Button>Send Request</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>

            <About />
        </React.Fragment>
    );

}
export default Home;
