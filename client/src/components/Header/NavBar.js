import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';



function NavBar() {
    return (
        <div className="vw-100">

        <Navbar fixed="top" expand="lg" bg="dark" variant="dark" className="mb-3" >
            <Container fluid>
                {/* left side */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Link to="/home" className="text-decoration-none">
                        <img src="/images/code-icon.png" className="App-logo" alt="logo" />
                        <Navbar.Brand>Portfolio</Navbar.Brand>
                    </Link>
                <Nav>
                    <Link to="/about"  style={{textDecoration: 'none', color: "white"}}>
                        About Me
                    </Link>
                    <Link to="/projects" style={{textDecoration: 'none'}} >
                        Projects
                    </Link>
                </Nav>
                {/* right side */}
                <Nav className=" ms-auto ">
                    <Nav.Link href="https://www.github.com/andylaborde" target="blank">
                        <img src="/images/github.png" alt="Git Hub Logo"></img>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <img src="/images/gmail.png" alt="gmail logo"></img>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;