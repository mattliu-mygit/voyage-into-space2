import React, { useState } from 'react';

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <button className="collapsible btn btn-primary" onClick={handleClick}>
        {props.title}
      </button>
      {open ? (
        <div className="content">
          <p>{props.content}</p>
        </div>
      ) : null}
    </>
  );
};

export default Collapsible;
