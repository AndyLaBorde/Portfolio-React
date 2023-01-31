import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import codeIcon from '../../images/code-icon.png';
import gitHubIcon from '../../images/github.png';
import gmailIcon from '../../images/gmail.png';


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

        <Navbar fixed="top" expand="lg" bg="dark" variant="dark" className="mb-3" >
            <Container fluid>
                {/* left side */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Link to="/" className="text-decoration-none">
                        <img src={codeIcon} className="App-logo" alt="logo" />
                        <Navbar.Brand>Portfolio</Navbar.Brand>
                    </Link>
                <Nav>
                    <Link to="/about"  style={{textDecoration: 'none', color: "white", marginRight: "10px"}}>
                        About Me
                    </Link>
                    <Link to="/projects" style={{textDecoration: 'none', color: "white"}} >
                        Projects
                    </Link>
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