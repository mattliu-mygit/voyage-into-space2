import React from 'react';
import { Link } from 'react-router-dom';

const HelpUsPage = () => {
  return (
    <>
      <div className="placeholder">|</div>
      <div className="main-content">
        <h2>Help us help you!</h2>
        <Link
          style={{ marginTop: '1rem' }}
          to="/covid-19/your-help"
          className="btn btn-primary"
        >
          See how <i>you</i> can help in the Covid-19 pandemic.
        </Link>
        <h4 style={{ marginTop: '2rem' }}>
          SPREAD THE WORD- we’re only useful if people know about us!
        </h4>
        <p>Share this website to others!</p>
        <p>
          Like our facebook page{' '}
          <a href="https://www.facebook.com/JHUHelp">here</a>.
        </p>
        <p>
          Share our{' '}
          <a href="https://docs.google.com/document/d/1ne6r_WEvp7nCRgAkDXcejjl7WMlBZ0EXV7U0QQltDcA/edit?usp=sharing">
            how to help doc
          </a>{' '}
          to let people know how they can help others!
        </p>
        <p>
          Email jhuhelp@gmail.com with your questions and concerns so we know
          what YOU need help on
        </p>
        <h4 style={{ marginTop: '2rem' }}>If you’re in Baltimore</h4>
        <p>
          Use{' '}
          <a href="https://docs.google.com/spreadsheets/d/1ReeJZuaIu1WYKZjCPH0pGC44Ot63P6fNjkZR1yuKt64/edit?usp=sharing">
            this community excel sheet
          </a>{' '}
          to offer or ask for help.{' '}
        </p>
      </div>
    </>
  );
};
export default HelpUsPage;
