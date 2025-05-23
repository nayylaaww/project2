import './RunButton.css';

const RunButton = ({ isRunning, onToggleRun }) => {
  return (
    <button className="run-btn" onClick={onToggleRun}>
      {isRunning ? 'STOP' : 'RUN'}
    </button>
  );
};

export default RunButton;



