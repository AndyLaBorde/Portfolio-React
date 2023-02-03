// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card'
// import {tsParticles} from 'tsparticles';

import { Container, Button } from "react-bootstrap";
import bgImage from "../../images/bgImage.JPG";
import Typewriter from "typewriter-effect";
import { Navigate } from "react-router-dom";
import Headshot from "../../images/headshot.png"



function Home() {
    
    return(
        <div style={{backgroundImage: `url(${bgImage})`,
        position: 'absolute', 
        left: 0,
        right: 0,
        top: 0,
        opacity: '30%',
        height: '100%'}}>

            <section className="w-100">
                <Container fluid className="d-flex justify-content-center align-items-center">
                    <div style={{fontSize: '56px', marginTop: '10%', fontFamily: 'Press Start 2P', }}>
                        <Typewriter
                            loop="true" 
                            onInit={(typewriter)=> {
                                typewriter
                                .typeString("I am a Developer...")
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString("n Innovator...")
                                .pauseFor(1000)
                                .deleteChars(14)
                                .typeString(" Collaborator...")
                                .pauseFor(1000)
                                .deleteChars(16)
                                .typeString("n out of the box thinker...")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Get to know me... ")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm Andrew LaBorde")
                                .start();
                            }}
                        />
                    </div>
                    <div style={{marginTop: "20%", position: 'absolute', top: 2, flexDirection: 'column'}} className="d-flex align-items-center">
                        <img src={Headshot} className=" img-fluid rounded-pill mx-3 d-block" alt="logo" />
                        <Button className="mt-3">
                            Hire Me
                        </Button>
                    </div>   
                </Container>
            </section>
        </div>
                
        

    )

}


export default Home;