import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';

const NavigationBar = () => (

<div className="pt-4 container" >
    

    <Navbar expand="lg">
        <Navbar.Brand href="/home"><img src={giraffeicon} height="50px" width="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mx-auto nav nav-pills nav-justified" >
                <Nav.Item><Nav.Link href="/" activeClassName="selected"  className="ml-4 mr-4">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link activeClassName="selected" href="#about" className="ml-4 mr-4">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link activeClassName="selected" href="#gallery" className="ml-4 mr-4">Gallery</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link activeClassName="selected" href="#footer" className="ml-4 mr-4">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    
   
    </div>
)


export default NavigationBar;
