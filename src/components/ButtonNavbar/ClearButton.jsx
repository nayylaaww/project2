import { useNavigate } from "react-router-dom";
import './ClearButton.css';

const ClearButton = ({ onClick }) => {
  return (
    <button className="clear-btn" onClick={onClick}>
      CLEAR
    </button>
  );
};

export default ClearButton;
