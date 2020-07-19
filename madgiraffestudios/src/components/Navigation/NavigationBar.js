import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import giraffeicon from '../../Images/icon.png';
import '../Navigation/Navigation.css'

const NavigationBar = () => (
   
        <Navbar expand="lg">
            <Navbar.Brand href="/home"><img src={giraffeicon} height="50px" width="50px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto mx-auto py-0" >
                <Nav.Item><Nav.Link href="/home">Work</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/bookings">Bookings</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>    
            </Nav>
    </Navbar.Collapse>
        </Navbar>

)


export default NavigationBar;
