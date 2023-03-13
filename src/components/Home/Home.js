import './Home.css';
import NavBar from '../NavBar/NavBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';


function Home() {
    return(
        <div className="background">
        <div>
        <Container className='container'>
        <Row>
        <Col>
        <div className='maindisplay'>
        <h1 className='header'>
            Welcome!
        </h1>
        <p>
            My name is Russell Banks, A Computer Science Student at UCSD, and Aspiring Software Engineer.
        </p>
        <p>
            This website is being built both as a personal project, as well as a future portfolio to display projects, skills, and more.
        </p>
        </div>
        </Col>
        </Row>
        <Row>
        <Col>
        </Col>
        </Row>
        </Container>
        </div>
        </div>
    );
}

export default Home;