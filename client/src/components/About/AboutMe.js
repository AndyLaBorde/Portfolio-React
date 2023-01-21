import Card from 'react-bootstrap/Card';

function AboutMe() {
    return (
        <div className="vw-100">

        <Card bg="dark" text="light" style={{ width: '80vw', display: 'flex', flexDirection: 'row'}}>
            <Card.Body style={{ flexDirection: 'column', width: '70%', margin: '1%', padding: '3%'}}>
                <img src="/images/headshot.png" alt="headshot" style={{ padding: '1%'}}></img>
                <Card.Title style={{ padding: '1%'}}>Andrew LaBorde</Card.Title>
                <Card.Subtitle style={{ padding: '1%'}}>Full Stack Web Developer</Card.Subtitle>
                <Card.Text style={{padding:'1%'}}>
                    Leveraging a background of management in the service industry with a desire for continuous learning, problem-solving and collaboration.
                    Experienced in managing customer relations by bridging the gap between the owners expectations and the productivity of the team.
                    Strong ability to design, maintain and build web applications from conception to production. Quick study of new technologies to find innovative and efficient solutions for current or future problems. 
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default AboutMe;