import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';


const NavigationBar = () => (

<div className="container">
    <Navbar expand="lg">
        <Navbar.Brand href="/home"><img src={giraffeicon} height="50px" width="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mx-auto nav nav-pills nav-justified" >
                <Nav.Item><Nav.Link href="/home"  className="ml-4 mr-4">Work</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link activeClassName="selected" href="/about" className="ml-4 mr-4">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/bookings" className="ml-4 mr-4">Bookings</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact" className="ml-4 mr-4">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
)


export default NavigationBar;
