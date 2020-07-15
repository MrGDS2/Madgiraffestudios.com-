import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";





const NavigationBar = () => (
   
        <Navbar  expand="lg">
            <Navbar.Brand href="/home"><span>icon-small</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto">

            <Nav.Item>
            <Nav.Link>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration= {500}>Work</Link>
                </Nav.Link>
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
            </Nav.Item>
            

            <Nav.Item>
            <Nav.Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>Meet Kae</Link> 
                {/* <Nav.Link href="/about">About</Nav.Link> */} 
                </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration= {500}>Schedule a Photoshoot</Link>
                {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                </Nav.Link>
                </Nav.Item>

                
                <Nav.Item>
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>Contact</Link>
                {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item> */}
        </Nav>

    </Navbar.Collapse>
    </Navbar>

)


export default NavigationBar;