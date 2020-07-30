import React, { useEffect, useState } from 'react';
import launchsite from '../launchsite.jpg';

const styles = {
  gameStyle: {
    borderRadius: '12px',
    border: 'solid',
    borderColor: 'silver',
    boxShadow: 'black',
    margin: '2.5%',
    marginTop: '2%',
    marginBottom: '0rem',
    backgroundImage: `url(${launchsite})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    color: '#39FF14',
    fontSize: '1.75vw',
    fontFamily: 'Lucida Console, Courier, monospace',
  },
  missionText: {
    marginLeft: '2rem',
  },
};

const GamePage = () => {
  const [started, setStarted] = useState(false);
  const [word1Num, setWord1Num] = useState(1);
  const [word2Num, setWord2Num] = useState(1);
  const [site, setSite] = useState('');
  const [date, setDate] = useState('');
  const [width, setWidth] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);
  const [opened, setOpened] = useState(false);
  const word1 = 'Voyage Inc. Desert Launch Site';
  const word2 = new Date().toString();

  useEffect(() => {
    if (!opened && borderWidth < 1.8) {
      setTimeout(() => {
        setBorderWidth(borderWidth + 0.02);
      }, 10);
    } else if (!opened && borderHeight < 1) {
      setTimeout(() => {
        setBorderHeight(borderHeight + 0.02);
      }, 10);
    } else if (borderHeight >= 1) {
      setTimeout(() => {
        setOpened(true);
      }, 500);
    }

    if (!started && opened && width < 95) {
      console.log('entered');
      setTimeout(() => {
        setWidth(width + 0.05);
      }, 1);
    } else if (opened && !started) {
      setStarted(true);
    }

    if (started && opened) {
      setTimeout(() => {
        if (word1Num <= word1.length) {
          setWord1Num(word1Num + 1);
          setSite(site + word1[word1Num - 1]);
        } else if (word2Num <= word2.length) {
          setWord2Num(word2Num + 1);
          setDate(date + word2[word2Num - 1]);
        }
      }, 100);
    }
  }, [
    site.length,
    date.length,
    started,
    width,
    borderWidth,
    opened,
    borderHeight,
  ]);

  return (
    <>
      <div className="placeholder"> |</div>
      <div
        style={{
          height: `50vw`,
          ...styles.gameStyle,
          width: `${width}%`,
          borderTopWidth: `${borderHeight}rem`,
          borderBottomWidth: `${borderHeight}rem`,
          borderLeftWidth: `${borderWidth}rem`,
          borderRightWidth: `${borderWidth}rem`,
        }}
      >
        <p style={{ marginTop: '1rem', ...styles.missionText }}>{site}</p>{' '}
        <p style={styles.missionText}>{date}</p>
      </div>
    </>
  );
};

export default GamePage;
