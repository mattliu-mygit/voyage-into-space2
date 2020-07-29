import React, { useState } from 'react';

const MenuItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <button className="btn btn-primary menu-item " onClick={handleClick}>
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

export default MenuItem;
