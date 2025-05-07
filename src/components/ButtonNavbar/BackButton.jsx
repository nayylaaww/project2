import { useNavigate } from "react-router-dom";
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate('/LevelPage')}>
      BACK
    </button>
  );
};

export default BackButton;
