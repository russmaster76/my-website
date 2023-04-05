import './Home.css';
import NavBar from "../NavBar/NavBar"


function Home() {
    return(
    <div>
    <NavBar />
    <div className='body'>
    <div className='content'>
        <h1 className='h1'>Welcome!</h1>
        <p className='p'>Hello! My name is Russell Banks, a Computer Science Student at University of California, San Diego</p>
        <p className='p'>This is a website I have built as a personal portfolio, in order to showcase projects, experience, and myself</p>
    </div>
    </div>
    </div>
    );
}

export default Home;