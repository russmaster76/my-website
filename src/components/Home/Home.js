import './Home.css';
import NavBar from "../NavBar/NavBar"


function Home() {
    return(
    <div>
    <NavBar />
    <div className='body'>
    <div className='content'>
        <h1 className='h1'>Welcome to my personal website!</h1>
        <p className='p'>Thanks for stopping by. My name is [Your Name], and this is where you can find out more about me, my work, and my interests.</p>
        <p className='p'>Feel free to explore the site, check out my portfolio, or read my latest blog posts. If you have any questions or want to get in touch, don't hesitate to reach out using the contact form.</p>
        <p className='p'>Thanks again for visiting, and I hope you enjoy your stay!</p>
    </div>
    </div>
    </div>
    );
}

export default Home;