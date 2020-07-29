import React from 'react';
import { Link } from 'react-router-dom';

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <div className="placeholder">|</div>
        <div className="main-content">
          <h2 style={{ marginBottom: '1rem' }}>Contact us!</h2>
          <p>
            Check out our Facebook page{' '}
            <a href="https://www.facebook.com/JHUHelp/?__tn__=%2Cd%2CP-R&eid=ARCzkTeb4uIJUi4nemKCHJf6vM9ByY6Z6NRKZYDBupNC2987pbYBScmveVrU-gsg3EKh_jO9a8Rr8L7G">
              here
            </a>
            .
          </p>
          <p>Email us at jhuhelp@gmail.com.</p>
          <p>
            To add data to the website, please refer to the instructions on the
            bottom of the page in <Link to="/data">Source Data and APIs</Link>.
          </p>
        </div>
      </>
    );
  }
}

export default ContactPage;
