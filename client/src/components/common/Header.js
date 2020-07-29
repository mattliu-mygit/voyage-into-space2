import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const headerButton = {
  padding: '0.2rem',
  borderRadius: '0px',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  marginBottom: '0.1rem',
};

function Header() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 840) {
      setHeaderActive(true);
    }
  }, [window.innerWidth]);

  const activeStyle = {
    color: '#89cff0',
    backgroundColor: 'transparent',
  };

  return (
    <>
      <nav
        className="headerBar"
        style={{ color: '#D8D8D8' }}
        onMouseLeave={() => {
          if (window.innerWidth < 840) {
            setHeaderActive(false);
          }
        }}
      >
        {headerActive || window.innerWidth > 840 ? (
          <div>
            <NavLink
              className="btn btn-primary header-btn first-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/"
              exact
            >
              Home
            </NavLink>
            {'|'}
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Header;
