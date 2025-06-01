import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/ContactUs';
import Navbar from '../components/Navbar';
import './LandingPage.css';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig';

function LandingPage() {
  const [showContact, setShowContact] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="landing-container" style={{ backgroundImage: `url('/background.png')` }}>
      <Navbar onContactClick={() => setShowContact(true)} />

      <div className="play-button-wrapper">
        <Link to={user ? "/levelpage" : "/login"} className="play-btn">
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

