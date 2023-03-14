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
<body className='body'>
	<div className="container">
		<h1 className='h1'>Welcome!</h1>
        <div className='form'>
            Hello! My name is Russell Banks, I am a Computer Science Student 
            and aspiring Software Engineer. This website is built both as a 
            personal project and a future portfolio to store projects.
        </div>
	</div>
</body>
    );
}

export default Home;