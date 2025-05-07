import { useNavigate } from "react-router-dom";
import './ClearButton.css';

const ClearButton = () => {
  const navigate = useNavigate();

  return (
    <button className="clear-btn" onClick={() => navigate('/LevelPage')}>
      CLEAR
    </button>
  );
};

export default ClearButton;