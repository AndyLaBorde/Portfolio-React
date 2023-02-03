import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navigate, NavLink} from 'react-router-dom';
import codeIcon from '../../images/code-icon.png';
import gitHubIcon from '../../images/github.png';
import gmailIcon from '../../images/gmail.png';
import Headshot from "../../images/headshot.png";
import {Link} from "react-scroll";


function Mailto({ email, subject, body, ...props }) {
    return (
        <Nav.Link href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
        </Nav.Link>
    );
}


function NavBar() {
    return (
        <div cstyle={{position: "absolute",
        height: "50px",
        top: "10px",
        right: "10px",
        left: "10px"}}>

        <Navbar fixed="top" expand="lg" bg="none" variant="dark" className="mb-3" >
            <Container fluid>
                {/* left side */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLink 
                        smooth
                        to="/"
                        duration={500}
                        className="mb-lg-auto mt-lg-4 text-decoration-none">
                        <img src={codeIcon} className="App-logo img-fluid rounded-pill mx-3" alt="logo" />
                        <Navbar.Brand className="mx-1">Andrew LaBorde</Navbar.Brand>
                    </NavLink>
                <Nav className='ms-5'>
                    <NavLink to="/About"  style={{textDecoration: 'none', color: "white", marginRight: "10px"}}>
                        About Me
                    </NavLink>
                    <NavLink to="/Projects" style={{textDecoration: 'none', color: "white"}} >
                        Projects
                    </NavLink>
                </Nav>
                {/* right side */}
                <Nav className=" ms-auto ">
                    <Nav.Link href="https://www.github.com/andylaborde" target="blank">
                        <img src={gitHubIcon} alt="GitHub icon"></img>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href={`mailto:andrew.lab14@gmail.com`}>
                        <Mailto email="andrew.lab14@gmail.com" subject="Contact Me" body="Hello World... ">
                            <img src={gmailIcon} alt="gmail icon"></img>
                        </Mailto>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;