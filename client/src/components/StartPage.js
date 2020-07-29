import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StartPage(props) {
  const [fontSize, setFontSize] = useState(0);
  const [blastOff, setBlastOff] = useState(false);
  useEffect(() => {
    if (fontSize < 11) {
      setTimeout(() => {
        setFontSize(fontSize + 0.05);
      }, 20);
    } else {
      setBlastOff(true);
    }
  });
  return (
    <>
      <div className="placeholder"> |</div>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '12.5%',
          fontSize: `${fontSize}rem`,
        }}
      >
        <b>
          <i>Voyage into Space</i>
        </b>
      </h1>
      {blastOff ? (
        <Link
          to="/blast-off"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            marginTop: '10rem',
            color: '#F1F4FFFF',
          }}
          className="btn"
        >
          <i>Blast Off!</i>
        </Link>
      ) : null}
    </>
  );
}
export default StartPage;
