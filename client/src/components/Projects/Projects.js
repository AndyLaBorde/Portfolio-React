import Card from 'react-bootstrap/Card';
import projectData from './projects.json';
import Container from 'react-bootstrap/Container';

function Projects() {
    const projectArr = [] // equal tyo an array of objects after map
        projectData.projects.map((project)=> {
            console.log(project)
        })
    return(
        
    <div className="d-flex col justify-content-center">
        <Container fluid id="cardContainer"className="align-items-center p-5 row justify-content-center mt-5">
        { projectData.projects.map((project) => 
            // console.log(project) 
            (
            <Card bg="secondary" key={ project.title } text="light" style={{ width: "18rem" }} className="m-2 align-items-center justify-content-center">
                <Card.Body>
                    <Card.Header><img src={ project.src }/></Card.Header>
                    <Card.Title> { project.title } </Card.Title>
                    <Card.Text> { project.description }</Card.Text>
                    <Card.Link> { project.url } </Card.Link>
                </Card.Body>
            </Card>
        ))}
        </Container>
    </div>
    );
}

export default Projects;