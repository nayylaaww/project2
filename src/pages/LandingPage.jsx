import Navbar from '../components/navbar';
import './LandingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
<div className="landing-container" style={{ backgroundImage: `url('/background.png')` }}>

      <Navbar />
      
      <div className="play-button-wrapper">
        <Link to="/game" className="play-btn">
          Play
        </Link>
      </div>

        <div className="tutorial-button-wrapper">
        <Link to="/tutorial" className='tutorial-btn'>
        Tutorial
        </Link>
        </div>

      </div>
  
  );
}

export default LandingPage;
