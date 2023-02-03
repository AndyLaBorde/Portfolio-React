import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

// project images/gifs
import gQuery from '../../images/gamerQ.gif';
import Pawsome from '../../images/pawesome_wireframe.png';
import Frogr from '../../images/frogr.png';
import workScheduler from '../../images/workScheduler.gif';
import Forecast from '../../images/forecast.png';
import oldPortfolio from '../../images/oldPortfolio.png';
import socialApi from '../../images/socialApi.gif';
import eCommerce from '../../images/eCommerce.gif';
import employeeTracker from '../../images/employeeTracker.png';
import teamGenerator from '../../images/teamGenerator.gif';
import readmeGenerator from '../../images/readmeGenerator.gif';
import bookSearch from '../../images/bookSearch.gif';
import passwordGenerator from "../../images/passwordGenerator.png";

// link icons
import gitHubIcon from '../../images/github.png';
import chromeIcon from '../../images/chrome-icon.png';
import playIcon from '../../images/playIcon.png';
import { Row } from 'react-bootstrap';

function Projects() {
    
    return(
            <div style={{marginTop: '1%', display: 'flex', alignItems: 'center', flexDirection: "column"}} >
                <h1 style={{color: 'white', padding: '1%', opacity: '50%', fontSize: '48px'}}> Projects </h1>
                <Container fluid id="cardContainer" className=" p-5 d-flex" style={{flexDirection: 'row', maxHeight: '75%'}}>
                    {/* nav link  */}
                    {/* react-masonry? */}

                    {/* full stack applications --> needs to be a separate component*/}
                    <div  className='col-4 '>
                        <h3 className='text-info m-2 border-bottom border-info border-4'>Full-Stack</h3>
                        <div id="appScroll" className='d-flex row h-25 overflow-scroll m-2 flex-wrap mt-3 justify-content-center' >

                            {/* Frogr */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={Frogr}></Card.Img>
                                    <Card.Title className="p-2"> Frogr </Card.Title>
                                    <Card.Text className="p-2"> A Microblog where you can upload images, videos, texts or links to share with the frogr community! Frogr was built using React, Express, GraphQL(Apollo), Node.js, and MongoDB in a 5 day sprint.
                                    </Card.Text>
                                    <Card.Link href="https://frogr-app.herokuapp.com/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/cbaird21/frogr" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>

                            {/* Book Search */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={bookSearch}></Card.Img>
                                    <Card.Title className="p-2"> Book Search </Card.Title>
                                    <Card.Text className="p-2"> This application is a fully functioning Google Books search engine using RESTful API's that was refactored to use GraphQL API and Apollo. The app was built using the MERN stack, with a React front end, MongoDB database, Node.js, Express.js, and GraphQL. 
                                    </Card.Text>
                                    <Card.Link href="https://frogr-app.herokuapp.com/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/cbaird21/Book-Search" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            
                            {/* Pawsome */}
                            <Card bg="secondary" text="light" className="m-2 ">
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

                            {/* gQuery */}
                            <Card bg="secondary" text="light" className="m-2">
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

                    {/* front end applications --> needs to be a separate component*/}
                    <div id="appScroll" className=' col-4'>
                        <h3 className="text-info m-2 border-bottom border-info border-4">Front-End</h3>
                        <div id="appScroll" className='d-flex h-25 row m-2 mt-3 overflow-scroll justify-content-center'>
                            {/* old portfolio */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={oldPortfolio}></Card.Img>
                                    <Card.Title className="p-2"> My First Portfolio </Card.Title>
                                    <Card.Text className="p-2"> This was the first attempt at my portfolio application that showcases completed projects and allows visitors to contact me through github email or linked in. </Card.Text>
                                    <Card.Link href="https://andylaborde.github.io/Portfolio/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/AndyLaBorde/Portfolio" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>

                            {/* 5-Day Forecast */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={Forecast}></Card.Img>
                                    <Card.Title className="p-2"> 5 Day Weather Forecast </Card.Title>
                                    <Card.Text className="p-2"> The Forecast application allows you to search for accurate weather data anywhere in the world in real time. This application was built using weather and geo-location API's HTML, CSS and Bootstrap. </Card.Text>
                                    <Card.Link href="https://andylaborde.github.io/5-Day-Forecast/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/AndyLaBorde/5-Day-Forecast" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            
                            {/* Work Scheduler */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={workScheduler}></Card.Img>
                                    <Card.Title className="p-2"> Work Day Scheduler </Card.Title>
                                    <Card.Text className="p-2"> This scheduling application tracks your daily schedule in real time! Input, update or delete appointments as needed. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It was built with JavaScript, the Day.js library, HTML, CSS, jQuery and Bootstrap. </Card.Text>
                                    <Card.Link href="https://andylaborde.github.io/Work_Scheduler/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/AndyLaBorde/Work_Scheduler" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>

                            {/* password generator */}
                            <Card bg="secondary" text="light" className="m-2">
                                <Card.Body>
                                    <Card.Img src={passwordGenerator}></Card.Img>
                                    <Card.Title className="p-2"> Password Generator </Card.Title>
                                    <Card.Text className="p-2"> This application allows the user to generate random passwords based on the criteria they have selected, and it will feature dynamically updated HTML and CSS powered by JavaScript. </Card.Text>
                                    <Card.Link href="https://andylaborde.github.io/Password_Generator/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                        <img src={chromeIcon} alt="chrome icon"></img>
                                    </Card.Link>
                                    <Card.Link href="https://github.com/AndyLaBorde/Password_Generator" className="ml-2" target="no_blank">
                                        <img src={gitHubIcon} alt="repo link"></img>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </div>

                    {/* back end applications --> needs to be a separate component*/}
                    <div id="appScroll" className='col-4'>
                        <h3 className='text-info m-2 border-bottom border-info border-4'>Back-End</h3>
                        <div id="appScroll" className='d-flex row h-25 overflow-scroll m-2 flex-wrap mt-3 justify-content-center' >

                        {/* social media api */}
                        <Card bg="secondary" text="light" className="m-2">
                            <Card.Body>
                                <Card.Img src={socialApi}></Card.Img>
                                <Card.Title className="p-2"> Social Media API </Card.Title>
                                <Card.Text className="p-2"> This application demonstrates a customized social media backend. It was built using Node.js, Express, Mongoose, and MongoDB. </Card.Text>
                                <Card.Link href="https://andylaborde.github.io/Social_Media_API/" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                    <img src={chromeIcon} alt="chrome icon"></img>
                                </Card.Link>
                                <Card.Link href="https://github.com/AndyLaBorde/Work_Scheduler" className="ml-2" target="no_blank">
                                    <img src={gitHubIcon} alt="repo link"></img>
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        {/* e-commerce back-end */}
                        <Card bg="secondary" text="light" className="m-2">
                            <Card.Body>
                                <Card.Img src={eCommerce}></Card.Img>
                                <Card.Title className="p-2"> E-Commerce </Card.Title>
                                <Card.Text className="p-2"> This back-end application demonstates the understanding of a basic e-commerce site. This application was developed using Node.js, Express.js, Sequelize and MySQL.  </Card.Text>
                                <Card.Link href="https://drive.google.com/file/d/19AA4AN-0INRLncuPtCnZ8Dox-bH_sd1k/view" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                    <img src={playIcon} alt="play icon"></img>
                                </Card.Link>
                                <Card.Link href="https://github.com/AndyLaBorde/E-Commerce" className="ml-2" target="no_blank">
                                    <img src={gitHubIcon} alt="repo link"></img>
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        {/* employee tracker */}
                        <Card bg="secondary" text="light" className="m-2">
                            <Card.Body>
                                <Card.Img src={employeeTracker}></Card.Img>
                                <Card.Title className="p-2"> Employee Tracker </Card.Title>
                                <Card.Text className="p-2"> This application is a content management system(CMS) allows the user to create, read update and delete the stored roles, departments and employees. This command-line aplication was built from scratch using Node.js, Inquirer, and MySQL. </Card.Text>
                                <Card.Link href="https://drive.google.com/file/d/1wfqPrFH68xvQDPV2Wz-2wf_nzaTzz6bZ/view" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                    <img src={playIcon} alt="play icon"></img>
                                </Card.Link>
                                <Card.Link href="https://github.com/AndyLaBorde/Employee_Tracker" className="ml-2" target="no_blank">
                                    <img src={gitHubIcon} alt="repo link"></img>
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        {/* Team Profile Generator */}
                        <Card bg="secondary" text="light"className="m-2">
                            <Card.Body>
                                <Card.Img src={teamGenerator}></Card.Img>
                                <Card.Title className="p-2"> Team Profile Generator </Card.Title>
                                <Card.Text className="p-2"> This command-line application takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This application was built using test driven development, Node.js, Inquirer, Jest  </Card.Text>
                                <Card.Link href="https://watch.screencastify.com/v/LXEHa7wzK3RecbCmMLLe" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                    <img src={playIcon} alt="play icon"></img>
                                </Card.Link>
                                <Card.Link href="https://github.com/AndyLaBorde/Team_Profile_Generator" className="ml-2" target="no_blank">
                                    <img src={gitHubIcon} alt="repo link"></img>
                                </Card.Link>
                            </Card.Body>
                        </Card>

                        {/* README Generator */}
                        <Card bg="secondary" text="light"className="m-2">
                            <Card.Body>
                                <Card.Img src={readmeGenerator}></Card.Img>
                                <Card.Title className="p-2"> README.md Generator </Card.Title>
                                <Card.Text className="p-2"> This command-line application takes in information about a project and the project creator to generate a professional readme template. This application was built using Node.js and Inquirer.  </Card.Text>
                                <Card.Link href="https://watch.screencastify.com/v/wVZOM39eNooqgurRaLlb" className="p-2 text-decoration-none text-info" target="no_blank"> 
                                    <img src={playIcon} alt="play icon"></img>
                                </Card.Link>
                                <Card.Link href="https://github.com/AndyLaBorde/README_Generator" className="ml-2" target="no_blank">
                                    <img src={gitHubIcon} alt="repo link"></img>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        </div>
                        
                    </div>
                </Container>
            </div>
    
    );
}

export default Projects;