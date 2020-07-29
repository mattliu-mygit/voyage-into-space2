import React, { useEffect, useState } from 'react';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';
import { getData } from '../../api/collegehelpsApi';

const CollegeHelpPage = () => {
  const [collegeHelp, setCollegeHelp] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setCollegeHelp(data);
    });
  }, []);
  return (
    <div className="main-content covid-content">
      <h2>College Help/Academic Assistance</h2>
      {collegeHelp.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </div>
  );
};

export default CollegeHelpPage;
