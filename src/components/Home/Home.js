import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
function Home() {
    return(
        <div id="home" class="bg-dark text-light">
            <Container fluid bg="dark" >
                <Card body >
                    This is the Home page
                </Card>
            </Container>
        </div> 
    )

}

export default Home;