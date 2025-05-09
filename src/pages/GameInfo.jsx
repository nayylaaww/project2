import React from 'react';
import './GameInfo.css';
import { useNavigate } from 'react-router-dom';

function GameInfo() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="game-info-container">
     <button className="close-btn-home" onClick={handleClose}>🏠︎</button>
      <div className="content">
        <p>
        Lorem ipsum dolor sit amet, pembentuk adipiscing elit. Komodo ligula eget dolor Aenea. Massa Aenea. 
        Dengan masyarakat natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Dalam enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Tidak ada diktum felis eu pede mollis pretium. Timbul bilangan bulat. Cras dapibus. Vivamus elementum semper nisi. 
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
        Phasellus viverra nulla ut metus varius laoreet. Rutrum yang aneh. Imperdiet Aenea. Ini sangat sulit. Curabitur ullamcorper ultricies nisi. Namaku benar. Etiam rhoncus. 
        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        Maecenas nec odio dan ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Tidak ada yang terjadi sebelumnya. 
        Etiam duduk amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris duduk amet nibh. Donec sodales sagittis magna. 
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
        </p>
      </div>
    </div>
  );
}

export default GameInfo;
