import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible';
import { getData } from '../../api/homeschoolingandchildcareApi';
import JsxParser from 'react-jsx-parser';

const ChildcarePage = () => {
  const [homeschoolingandchildcare, setHomeschoolingandchildcare] = useState(
    []
  );

  useEffect(() => {
    getData().then((data) => {
      setHomeschoolingandchildcare(data);
    });
  }, []);
  return (
    <div className="main-content covid-content">
      <h2>Homeschooling and ChildCare</h2>
      {homeschoolingandchildcare.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </div>
  );
};

export default ChildcarePage;
