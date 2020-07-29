import React from 'react';
import { Link } from 'react-router-dom';

const DataPage = () => {
  return (
    <>
      <div className="placeholder">|</div>
      <div className="main-content">
        <h1>Source Data and APIs</h1>
        <p>All data is open source.</p>
        <h5 style={{ marginTop: '2rem' }}>Documents</h5>
        <p>
          Covid-19 source data can be found in our Google Docs{' '}
          <a href="https://docs.google.com/document/d/1RXeWB44_cGAYk3RCmG-_Qzub1AV0962fuqeOdOjDjwo/edit?fbclid=IwAR0eq6vKjbxUx9Jfa0AvkTiW3Ly4fH07EH_oI0f9tv86C8mPLbW4s-MrIzo">
            here
          </a>{' '}
          in multiple languages.
        </p>
        <p>
          Maryland 911 Alternatives source data can be found in our Google Docs{' '}
          <a href="https://docs.google.com/document/d/1GWvI4Yv7D-IyJk5_IidkbTFXSnkC0-Umg_ptaak9sZY/edit?fbclid=IwAR3G1WctmFTqv8HTzh15i1jn0DOPDcVS_XW5NW29XlgT5qPSWpUyeypzxWo">
            here
          </a>
          .
        </p>
        <h5 style={{ marginTop: '2rem' }}>APIs</h5>
        <p>
          Data used to generate this website was sourced from its connected JHU
          Help website MongoDB database in JSON format.
          <p>
            Feel free to make get requests to this database with the links
            below.
            <p>
              The content of the data is written in JSX, so unless you're
              working with a React application, it's going to be a bit difficult
              to use the information unfortunately.
              <p>
                If the need calls for it, send me an email at mliu78@jh.edu and
                I'll take some time to convert it hopefully. :)
              </p>
            </p>
          </p>
        </p>
        <p>
          Maryland 911 Alternatives:{' '}
          <a href="https://jhu-help.herokuapp.com/api/maryland911alternatives">
            /api/maryland911alternatives
          </a>
        </p>
        <p>
          SGA important issues survey results:{' '}
          <a href="https://jhu-help.herokuapp.com/api/SGASurveyResults">
            /api/SGASurveyResults
          </a>
        </p>
        <p>
          College Help information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/collegehelps">
            /api/covid-19/collegehelps
          </a>
        </p>
        <p>
          Homeschooling and Childcare information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/homeschoolingandchildcare">
            /api/covid-19/homeschoolingandchildcare
          </a>
        </p>
        <p>
          Mental and Emotional Help information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/mentalandemotional">
            /api/covid-19/mentalandemotional
          </a>
        </p>
        <p>
          Racism and Hate Crime Reporting information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/racismhatecrimes">
            /api/covid-19/racismhatecrimes
          </a>
        </p>
        <p>
          Resource Insecurity Help information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/resourceinsecurities">
            /api/covid-19/resourceinsecurities
          </a>
        </p>
        <p>
          Unstable Income Help information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/unstableincome">
            /api/covid-19/unstableincome
          </a>
        </p>
        <p>
          DIY and Fun information:{' '}
          <a href="https://jhu-help.herokuapp.com/api/covid-19/diy">
            /api/covid-19/diy
          </a>
        </p>
        <h5 style={{ marginTop: '2rem' }}>
          Adding Data to the Website/Database
        </h5>
        <p>
          Data is controlled by a MongoDB database. As deleting and adding new
          data is quite permanent and direct, for safety purposes of the content
          of the website, one would need access to the database by whitelist.
        </p>
        <h6>For people who don't have access to the MongoDB database.</h6>
        <p>Please contact JHU Help at jhuhelp@gmail.com.</p>
        <h6>For people with access</h6>
        Refer to <Link to="/mongo">this</Link> page.
      </div>
    </>
  );
};

export default DataPage;
