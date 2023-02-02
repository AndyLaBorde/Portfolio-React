import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import headShot from '../../images/headshot.png';



function AboutMe() {
    return (
        <div style={{marginTop: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10%', backgroundColor: "#2C2D2B", flexDirection: "column"}} >
            <h3 id="AboutMe" style={{color: 'white', padding: '1%'}}>About Me</h3>
            <div >
                <Container fluid className="row justify-content-center align-items-center w-100">
                    <div className='justify-content-center col-6'>
                        <Card bg="secondary" text="light" className="justify-content-center h-75">
                        <Card.Body className='p-3'>
                            <Card.Img src={headShot} alt="headshot" style={{ padding: '1%', maxHeight: '350px', maxWidth: '350px'}}></Card.Img>
                            <Card.Title className="p-2 bold-5">Andrew LaBorde</Card.Title>
                            <Card.Subtitle className="p-1">Full Stack Web Developer</Card.Subtitle>
                            <Card.Text className="p-1">
                                With a background of management in the service industry and a desire for continuous learning, problem-solving and collaboration. 
                                Strong ability to design, maintain and build web applications from conception to production.   
                                Quick study of new technologies to find innovative and efficient solutions for current or future problems. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                {/* Resume */}
                    <div className="col-6">
                        <Card bg="secondary">
                            <Card.Title>Resume</Card.Title>
                            <Card.Body>
                                <Card.Header>Education</Card.Header>
                                <Card.Text>
                                    Certificate from the University of Denver
                                    Full Stack Web Development

                                    
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                    
                </Container>
            </div>
                
                
        </div>
        
    );
}

export default AboutMe;