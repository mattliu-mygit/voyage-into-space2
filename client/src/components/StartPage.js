import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StartPage(props) {
  const [fontSize, setFontSize] = useState(0);
  const [blastOff, setBlastOff] = useState(false);
  useEffect(() => {
    if (fontSize < 10) {
      setTimeout(() => {
        setFontSize(fontSize + 0.005);
      }, 1);
    } else {
      setBlastOff(true);
    }
  });
  return (
    <>
      <div className="placeholder"> |</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          //textAlign: 'center',
          marginTop: '12.5%',
          fontSize: `${fontSize}vw`,
        }}
      >
        <b>
          <i>Voyage into Space</i>
        </b>
      </div>
      {blastOff ? (
        <Link
          to="/blast-off"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5vw',
            marginTop: '10rem',
            color: '#F1F4FFFF',
          }}
          className="btn launch-btn"
        >
          <i>Blast Off!</i>
        </Link>
      ) : null}
    </>
  );
}
export default StartPage;
