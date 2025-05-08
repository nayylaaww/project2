import { useNavigate } from "react-router-dom";
import './RunButton.css';

const RunButton = () => {
  const navigate = useNavigate();

  return (
    <button className="clear-btn" onClick={() => navigate('/LevelPage')}>
      RUN
    </button>
  );
};

export default RunButton;