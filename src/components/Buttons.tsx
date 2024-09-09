import React from 'react';
import '../scss/buttons.scss';

const Buttons: React.FC = () => {
  const handlePlay = () => {
    // Add your logic for the play button here
    alert('Play button clicked');
  };

  const handleRestart = () => {
    // Add your logic for the restart button here
    alert('Restart button clicked');
  };

  return (
    <div className='buttons'>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Buttons;