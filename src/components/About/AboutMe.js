import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import headShot from '../../images/headshot.png';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from "react-markdown";

function AboutMe() {
    return (
        <div className="row p-5 h-100 m-2 ">
            <div className="col-6 h-75">
                <Container fluid className="row justify-content-center align-items-center h-75">
                    <div className='justify-content-center'>
                        <Card bg="dark" text="light" className="justify-content-center">
                        <Card.Body className='p-5'>
                            <Card.Img src={headShot} alt="headshot" style={{ padding: '1%', maxHeight: '350px', maxWidth: '350px'}}></Card.Img>
                            <Card.Title className="p-2">Andrew LaBorde</Card.Title>
                            <Card.Subtitle className="p-2">Full Stack Web Developer</Card.Subtitle>
                            <Card.Text className="p-2">
                                With a background of management in the service industry and a desire for continuous learning, problem-solving and collaboration. 
                                Strong ability to design, maintain and build web applications from conception to production.   
                                Quick study of new technologies to find innovative and efficient solutions for current or future problems. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </Container>
            </div>
            <div className="col-6">
                <Card>
                    {/* readme from github profiles */}
                    
                </Card>
                
            </div>
        </div>
        
    );
}

export default AboutMe;