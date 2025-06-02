import { useNavigate } from 'react-router-dom';
import './Tutorial.css';

function Tutorial() {
  const navigate = useNavigate();

  return (
    <div className="tutorial-wrapper">
      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back
      </button>

      <video className="video-preview" controls autoPlay>
        <source src="/vid.mp4" type="video/mp4" />
        Browsermu tidak mendukung video.
      </video>
    </div>
  );
}

export default Tutorial;
