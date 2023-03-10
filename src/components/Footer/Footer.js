
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <div id="footer" bg="none" style={{position: "absolute",
    right: "10px",
    height: "50px",
    bottom: "10px",
    left: "10px"}}>
            <Navbar  bg="none" variant="dark" className="fixed-bottom">
                <Container fluid>
                    <Nav.Link href="https://reactjs.org/" target="blank" className="m-3">
                        <Badge pill bg="info" text="dark">
                            React
                        </Badge>{' '}
                    </Nav.Link>
                    <Nav.Link href="https://www.npmjs.com/package/react-router-dom" target="blank" className="m-3">
                        <Badge pill bg="info" text="dark">
                            React-Router-Dom
                        </Badge>{' '}
                    </Nav.Link >
                    <Nav.Link href="https://react-bootstrap.netlify.app" target="blank" className="m-3">
                        <Badge pill bg="info" text="dark">
                            React-Bootstrap
                        </Badge>{' '}
                    </Nav.Link>
                    <Nav.Link href="https://nodejs.org/en/" target="blank" className="ms-auto m-3">
                        <Badge pill bg="success" text="light" >
                            Node
                        </Badge>{' '}
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;