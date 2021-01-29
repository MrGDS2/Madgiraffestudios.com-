import React, { useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';
import Booking from '../Booking/Booking';


const NavigationBar = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.showModal();
    }

    return (
        <React.Fragment>

            <div className="pt-4 container sticky-top nav-top">
                
                <Navbar expand="lg">
                    <Navbar.Brand href="/"><img src={giraffeicon} height="50px" width="50px" alt="nav-icon" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mx-auto nav" >
                            <Nav.Item><Nav.Link href="/" activeclassname="selected" className="ml-4 mr-4">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/#about" className="ml-4 mr-4">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/#gallery" className="ml-4 mr-4">Gallery</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/#footer" className="ml-4 mr-4">Network</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link activeclassname="selected" href="/LiberteNoir" className="ml-4 mr-4 mb-2">Events</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="ml-auto mx-auto nav nav-pills nav-justified" >
                            <Nav.Item>
                                <Booking ref={ref} />
                                <button type="button" className="btn shadow-lg booking-btn p-3 float-right" onClick={() => handleClick()}>
                                    Contact</button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>



        </React.Fragment>
    )
}


export default NavigationBar;
