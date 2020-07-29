import React from 'react';
import launchsite from '../launchsite.jpg';

const GamePage = () => {
  return (
    <>
      <div className="placeholder"> |</div>
      <img
        style={{
          width: '90%',
          borderRadius: '12px',
          border: 'solid',
          borderColor: 'silver',
          boxShadow: 'black',
          borderWidth: '1rem',
          margin: '5%',
          marginTop: '2rem',
          marginBottom: '0rem',
        }}
        src={launchsite}
        alt="uh oh, launch site pic not found"
      />
    </>
  );
};

export default GamePage;
