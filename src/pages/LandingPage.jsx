import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/ContactUs';
import './LandingPage.css';

function LandingPage() {
  const [showContact, setShowContact] = useState(false);

  return (
<div className="landing-container" style={{ backgroundImage: `url('/background.png')` }}>
      <Navbar onContactClick={() => setShowContact(true)} />

      <div className="play-button-wrapper">
        <Link to="/levelpage" className="play-btn">
          Play
        </Link>
      </div>

      <div className="tutorial-button-wrapper">
        <Link to="/tutorial" className="tutorial-btn">
          Tutorial
        </Link>
      </div>

      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </div>
  );
}

export default LandingPage;

