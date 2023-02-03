import { ListGroup, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import headShot from '../../images/headshot.png';
import Nav from "react-bootstrap/Nav";
import resume from "../../assets/Andrew_Resume_2023.pdf";

function Mailto({ email, subject, body, ...props }) {
    return (
        <Nav.Link href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
        </Nav.Link>
    );
}




function AboutMe() {
    return (
        <div style={{marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}} >
            <h1 id="AboutMe" style={{color: 'white', padding: '1%', opacity: '50%'}}>About Me</h1>
            <div >
                <Container fluid className="row justify-content-center align-items-center">
                    <div className='justify-content-center col-5'>
                        <Card bg="transparent" text="light" className="justify-content-center h-75">
                        <Card.Body className='p-3'>
                            <Card.Img src={headShot} alt="headshot" style={{ padding: '1%', maxHeight: '350px', maxWidth: '350px', margin: '3%'}}></Card.Img>
                            <Card.Title className="p-2"  style={{opacity: '90%', fontSize: '28px'}}>I'm <span className='text-info' style={{opacity: '90%', fontSize: '28px'}}>Andrew LaBorde</span>, a Full Stack Developer</Card.Title>
                            <Card.Subtitle className="p-1" style={{opacity: '90%', fontSize: '18px'}}><b>Focus:</b><span className='text-info'> MongoDB, Express, React, Node</span></Card.Subtitle>
                            <Card.Text className="p-1" style={{opacity: '50%', fontSize: '18px'}}>
                                With a background of management in the service industry and a desire for continuous learning, problem-solving and collaboration. 
                                Strong ability to design, maintain and build web applications from conception to production.   
                                Quick study of new technologies to find innovative and efficient solutions for current or future problems. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                {/* Resume */}
                    <div className="col-5">
                        <Card bg="transparent">
                            <Card.Body>
                                <ListGroup className="p-2 ">
                                    <ListGroup.Item className="bg-dark text-light border-bottom"style={{ fontSize: "24px"}}>
                                        <b>Name:</b><span style={{opacity: '70%', fontSize: "24px", paddingLeft: "10px"}}>Andrew LaBorde </span></ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-light border-bottom d-flex" style={{fontSize: "24px"}}>
                                        <b>Email:</b>
                                        <Nav.Link eventKey={2} href={`mailto:andrew.lab14@gmail.com`}>
                                            <Mailto email="andrew.lab14@gmail.com" subject="Contact Me" body="Hello World... " className="">
                                                <span className='text-info' style={{paddingLeft: '10px'}}>andrew.lab14@gmail.com</span>
                                            </Mailto>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-light" style={{fontSize: "24px"}}>
                                        <b>Location:</b> Golden, Colorado</ListGroup.Item>
                                </ListGroup>
                                <Button className="rounded w-50 mx-4 bg-info p-3" href={resume} download="Andrew_Resume_2023.pdf" style={{fontSize: "24px"}}>Download CV</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    
                </Container>
            </div>
                
                
        </div>
        
    );
}

export default AboutMe;