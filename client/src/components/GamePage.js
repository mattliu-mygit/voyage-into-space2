import React, { useEffect, useState } from 'react';
import launchsite from '../launchsite.jpg';

const styles = {
  gameStyle: {
    width: '90%',
    borderRadius: '12px',
    border: 'solid',
    borderColor: 'silver',
    boxShadow: 'black',
    borderWidth: '1rem',
    margin: '5%',
    marginTop: '2%',
    marginBottom: '0rem',
    backgroundImage: `url(${launchsite})`,
    height: '50vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '1rem',
    paddingLeft: '2rem',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    color: '#39FF14',
    fontSize: '1.75vw',
    fontFamily: 'Lucida Console, Courier, monospace',
  },
};

const GamePage = () => {
  const [word1Num, setWord1Num] = useState(1);
  const [word2Num, setWord2Num] = useState(1);
  const [site, setSite] = useState('');
  const [date, setDate] = useState('');
  const word1 = 'Voyage Inc. Desert Launch Site';
  const word2 = new Date().toString();

  useEffect(() => {
    setTimeout(() => {
      if (word1Num <= word1.length) {
        setWord1Num(word1Num + 1);
        setSite(site + word1[word1Num - 1]);
      } else if (word2Num <= word2.length) {
        setWord2Num(word2Num + 1);
        setDate(date + word2[word2Num - 1]);
      }
    }, 100);
  }, [site.length, date.length]);

  return (
    <>
      <div className="placeholder"> |</div>
      <div style={styles.gameStyle}>
        <p>{site}</p> <p>{date}</p>
      </div>
    </>
  );
};

export default GamePage;
