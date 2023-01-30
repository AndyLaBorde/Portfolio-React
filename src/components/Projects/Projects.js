import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// images
import gQuery from '../../images/gamerQ.gif';
import Pawsome from '../../images/pawesome_wireframe.png';
import Frogr from '../../images/frogr.png';
import gitHubIcon from '../../images/github.png';
import chromeIcon from '../../images/chrome-icon.png';

function Projects() {
    
    return(
    <div className="d-flex col justify-content-center w-100">
        <Container fluid id="cardContainer" className=" p-5 row justify-content-center mt-5 w-100">

            {/* full stack applications */}
            <div id="full-stack-apps" className='col-4'>
                <h5 className='text-info'>Full-Stack</h5>
                <div id="projectScroll" className='row customScroll'S>
                    <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-1 align-items-center justify-content-center">
                        <Card.Body>
                            <Card.Img src={Frogr}></Card.Img>
                            <Card.Title className="p-2"> Frogr </Card.Title>
                            <Card.Text className="p-2"> A Microblog where you can upload images, videos, texts or links to share with the frogr community! Frogr was built using React, Express, GraphQL(Apollo), Node.js, and MongoDB in a 5 day sprint. Agile methodologies, Kanban, and daily Scrum meetings kept the team on task individually and as a group. 
                            </Card.Text>
                            <Card.Link href="https://frogr-app.herokuapp.com/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                <img src={chromeIcon} alt="chrome icon"></img>
                            </Card.Link>
                            <Card.Link href="https://github.com/cbaird21/frogr" className="ml-2" target="no_blank">
                                <img src={gitHubIcon} alt="repo link"></img>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    

                    <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-1 align-items-center justify-content-center">
                        <Card.Body>
                            <Card.Img src={Pawsome} alt="pawsome image"></Card.Img>
                            <Card.Title className="p-2"> Pawsome </Card.Title>
                            <Card.Text className="p-2"> The social media for pets!  This application was created using Javascript, SQL, Node.js and Handlebars in a 7 day sprint. Agile methodologies, Kanban, and daily Scrum meetings led to a succesfull production environment. </Card.Text>
                            <Card.Link href="https://pawsome.herokuapp.com/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                <img src={chromeIcon} alt="chrome icon"></img>
                            </Card.Link>
                            <Card.Link href="https://github.com/AndyLaBorde/Pawsome" className="ml-2" target="no_blank">
                                <img src={gitHubIcon} alt="repo link"></img>
                            </Card.Link>
                        </Card.Body>
                    </Card>

                    <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-1 align-items-center ">
                        <Card.Body>
                            <Card.Img src={gQuery} alt="gQuery gif"></Card.Img>
                            <Card.Title className="p-2"> G-Query </Card.Title>
                            <Card.Text className="p-2">
                                With G-Query a user can search by genre, platform, and the game name itself. Using multiple custom built API's from rawg.io and youtube.com to display searched game information, and video trailers to their respective games.
                            </Card.Text>
                            <Card.Link href="https://andylaborde.github.io/G-Query/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                <img src={chromeIcon} alt="chrome icon"></img>
                            </Card.Link>
                            <Card.Link href="https://github.com/AndyLaBorde/G-Query" className="ml-2" target="no_blank">
                                <img src={gitHubIcon} alt="repo link"></img>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* front end applications */}
            <div id="front-end" className='col-4'>
                <h5 className="text-info">Front-End</h5>
                <div className='row'>
                    <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-2 align-items-center justify-content-center">
                        <Card.Body>
                            <Card.Img src=""></Card.Img>
                            <Card.Title className="p-2"> title </Card.Title>
                            <Card.Text className="p-2"> description </Card.Text>
                            <Card.Link href="" className="p-2 text-decoration-none text-info"> Deployed Application </Card.Link>
                        </Card.Body>
                    </Card>

                    <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-2 align-items-center justify-content-center">
                        <Card.Body>
                            <Card.Img src=""></Card.Img>
                            <Card.Title className="p-2"> title </Card.Title>
                            <Card.Text className="p-2"> description </Card.Text>
                            <Card.Link href="" className="p-2 text-decoration-none text-info"> Deployed Application </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>

            {/* back end applications */}
            <div id="back-end" className='col-4'>
                <h5 className="text-info">Back-End</h5>
                <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-2 align-items-center justify-content-center">
                    <Card.Body>
                        <Card.Img src=""></Card.Img>
                        <Card.Title className="p-2"> title </Card.Title>
                        <Card.Text className="p-2"> description </Card.Text>
                        <Card.Link href="" className="p-2 text-decoration-none text-info"> Deployed Application </Card.Link>
                    </Card.Body>
                </Card>

                <Card bg="secondary" text="light" style={{ width: "18rem" }} className="m-2 align-items-center justify-content-center">
                    <Card.Body>
                        <Card.Img src=""></Card.Img>
                        <Card.Title className="p-2"> title </Card.Title>
                        <Card.Text className="p-2"> description </Card.Text>
                        <Card.Link href="" className="p-2 text-decoration-none text-info"> Deployed Application </Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    </div>
    );
}

export default Projects;