import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';
import { getData } from '../../api/racismhatecrimesApi';

const ReportPage = () => {
  const [racismHateCrimes, setracismHateCrimes] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setracismHateCrimes(data);
    });
  }, []);

  return (
    <div className="main-content covid-content">
      <h2>Report Racism/Hate Crimes</h2>
      {racismHateCrimes.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </div>
  );
};
export default ReportPage;
