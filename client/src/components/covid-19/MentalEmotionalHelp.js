import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import { getData } from '../../api/mentalandemotionalApi';
import JsxParser from 'react-jsx-parser';

const MentalEmotionalHelp = () => {
  const [mentalAndEmotional, setMentalAndEmotional] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setMentalAndEmotional(data);
    });
  }, []);

  return (
    <div className="main-content covid-content">
      <h2>Mental and Emotional Resources</h2>
      <p>
        Some tips for self-care while socializing can be found{' '}
        <a href="https://hub.jhu.edu/2020/03/26/self-care-coronavirus-tips/?utm_source=fb&utm_medium=sm&utm_campaign=covid&utm_content=0327">
          here
        </a>
        .
      </p>
      {mentalAndEmotional.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </div>
  );
};

export default MentalEmotionalHelp;
