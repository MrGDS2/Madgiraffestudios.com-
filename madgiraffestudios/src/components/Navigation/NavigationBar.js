import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormFeedback, Label, Input, FormGroup, Button } from 'reactstrap';

import giraffeicon from '../../Images/icon.png';

const NavigationBar = () => {

    const [displayModal, setDisplayModal] = useState(false);

return (
    <React.Fragment>
    <div className="pt-4 container" >
        <Navbar expand="lg">
            <Navbar.Brand href="/home"><img src={giraffeicon} height="50px" width="50px" alt="nav-icon"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mx-auto nav nav-pills nav-justified" >
                    <Nav.Item><Nav.Link href="/" activeClassName="selected"  className="ml-4 mr-4">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link activeClassName="selected" href="#about" className="ml-4 mr-4">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link activeClassName="selected" href="#gallery" className="ml-4 mr-4">Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link activeClassName="selected" href="#footer" className="ml-4 mr-4">Contact</Nav.Link></Nav.Item>
                </Nav>
                <Nav className="ml-auto mx-auto nav nav-pills nav-justified" >
                    <Nav.Item><button type="button" className="btn rounded shadow-lg booking-btn p-3 float-right" onClick={() => setDisplayModal(true)}>Book Me</button></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

    <Modal isOpen={displayModal} toggle={() => setDisplayModal(false)}   className="mt-5 text-center">
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
                            <Input type="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone" className="d-block text-left">Phone</Label>
                            <Input type="tel"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" className="d-block text-left">What would you like?</Label>
                            <Input type="select">
                                <option>Choose one</option>
                                <option>Photo Shoot</option>
                                <option>Graphic Design</option>
                                <option>Illustration</option>
                            </Input>
                        </FormGroup>
            
                        <FormGroup>
                            <Label for="subject" className="d-block text-left">Description</Label>
                            <Input type="textarea" id="modal-textarea" required/>
                        </FormGroup>
                        <Button onClick={() => setDisplayModal(false)}>Send Request</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
    </React.Fragment>
    )
}


export default NavigationBar;
