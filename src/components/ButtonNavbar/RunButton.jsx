import './RunButton.css';

const RunButton = ({ onRun }) => {
  return (
    <button className="run-btn" onClick={onRun}>
      RUN
    </button>
  );
};

export default RunButton;


