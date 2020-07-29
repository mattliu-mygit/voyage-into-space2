import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { toast } from 'react-toastify';

function HomePage() {
  useEffect(() => {
    toast.info('Hello user! Please explore our site or search below!');
  }, []);
  return (
    <>
      <div className="placeholder"> |</div>
      <div
        className="jumbotron"
        style={{ paddingBottom: '0rem', minWidth: '0rem' }}
      >
        <div className="bg-text">
          <h1 style={{ marginBottom: '2.5%' }}>JHU Help</h1>
          <h4>
            <b>Check out the links or search for information below!</b>
          </h4>
          <p></p>
          <h4>
            <b>
              <div className="frontPageLink">
                <Link to="/covid-19">
                  Check out our Covid-19 pandemic resources!
                </Link>
              </div>
              <div className="frontPageLink">
                <Link to="/maryland-911-alternatives">
                  Maryland 911 Alternatives
                </Link>
              </div>
              <div className="frontPageLink">
                <Link to="/help-us">Help us help you!</Link>
              </div>
            </b>
          </h4>
        </div>
      </div>
      <Search />
    </>
  );
}
export default HomePage;
