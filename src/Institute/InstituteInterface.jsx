import React from 'react';
import { Link } from 'react-router-dom';

function InstituteInterface() {
  return (
    <div className="institute-interface-container">
      <h1>Institute Interface</h1>
      <Link to="/institute/add-vehicle" style={{textDecoration:'none'}}>
        <button className="institute-interface-button">Add Vehicles</button>
      </Link>
      <button className="institute-interface-button">See Vehicles</button>
    </div>
  );
}

export default InstituteInterface;
