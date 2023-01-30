import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import headShot from '../../images/headshot.png';

function AboutMe() {
    return (
        <div className="row p-5 m-2 ">
            <div className="col-8 m-4">
                <Container fluid clasName="m-5 align-items-center">
                    <div className='justify-content-center'>
                        <Card bg="dark" text="light" className="justify-content-center">
                        <Card.Body className='p-5'>
                            <Card.Img src={headShot} alt="headshot" style={{ padding: '1%', maxHeight: '350px', maxWidth: '350px'}}></Card.Img>
                            <Card.Title className="p-2">Andrew LaBorde</Card.Title>
                            <Card.Subtitle className="p-2">Full Stack Web Developer</Card.Subtitle>
                            <Card.Text className="p-2">
                                With a background of management in the service industry and a desire for continuous learning, problem-solving and collaboration. 
                                Experienced in managing customer relations by bridging the gap between the owners expectations and the productivity of the team.  
                                Strong ability to design, maintain and build web applications from conception to production.   
                                Quick study of new technologies to find innovative and efficient solutions for current or future problems. 
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