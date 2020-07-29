import React, { useEffect, useState } from 'react';
import Collapsible from '../Collapsible';
import JsxParser from 'react-jsx-parser';
import { getData } from '../../api/diyApi';

const DIYPage = () => {
  const [diy, setDiy] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setDiy(data);
    });
  }, []);

  return (
    <div className="main-content covid-content">
      <h2>DIY Projects and Fun!</h2>
      {diy.map((data) => (
        <Collapsible
          title={data.main_title}
          content={<JsxParser jsx={data.main_content} />}
        />
      ))}
    </div>
  );
};

export default DIYPage;
