
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <div id="footer" bg="dark" className="container">
            <Navbar  bg="dark" variant="dark" className="fixed-bottom">
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
                    <Nav.Link href="https://www.npmjs.com/package/graphql-react" target="blank" className="m-3">
                        <Badge pill bg="info" text="dark">
                            GraphQL-React
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