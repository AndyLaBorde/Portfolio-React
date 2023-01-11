import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg'


function NavBar() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" >
        <Container fluid>
            <img src="/images/icons8-anonymous-mask-50.png" className="App-logo" alt="logo" />
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className=" ms-auto ">
                <Nav.Link href="https://www.github.com/andylaborde" target="blank"><img src="/images/github.png" alt="Git Hub Logo"></img></Nav.Link>
                <Nav.Link eventKey={2} href="#memes"><img src="/images/gmail.png" alt="gmail logo"></img></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;