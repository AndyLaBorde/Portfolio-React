// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card'
// import {tsParticles} from 'tsparticles';

import { Container, Button } from "react-bootstrap";
import bgImage from "../../images/bgImage.JPG";
import Typewriter from "typewriter-effect";



function Home() {
    
    return(
        <div style={{backgroundImage: `url(${bgImage})`,
        position: 'absolute', 
        left: 0,
        right: 0,
        top: 0,
        opacity: '30%',
        height: '100%'}}>

            <div className="w-100">
                <Container fluid className="d-flex justify-content-center align-items-center">
                    <div style={{fontSize: '36px', marginTop: '10%'}}>
                        <Typewriter
                            loop="true" 
                            onInit={(typewriter)=> {
                                typewriter
                                .typeString("I am a Developer...")
                                .pauseFor(2000)
                                .deleteChars(13)
                                .typeString("n Innovator...")
                                .pauseFor(2000)
                                .deleteChars(14)
                                .typeString(" Collaborator...")
                                .pauseFor(2000)
                                .deleteChars(16)
                                .typeString("n out of the box thinker...")
                                .start();
                            }}
                        />
                    </div>
                    <div>
                        
                    </div>   
                </Container>
            </div>
        </div>
                
        

    )

}


export default Home;