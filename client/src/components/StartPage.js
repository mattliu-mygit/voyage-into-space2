import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

function StartPage() {
  useEffect(() => {
    toast.info('Hello user! It is time to explore!! :3');
  }, []);
  return (
    <>
      <div className="placeholder"> |</div>
      <h1 style={{ color: 'white' }}>Voyage into Space</h1>
    </>
  );
}
export default StartPage;
