import React from 'react';
import { Link } from 'react-router-dom';

const StudentInterface = () => {
  return (
    <div className="vehicle-container">
      <h2 className="vehicle-title">Vehicle number:-</h2>
      <div className="vehicle-buttons">
        <Link to='/student/VehicleRoute-10'>
        <button className="vehicle-button">10</button>
        </Link>
        <button className="vehicle-button">11</button>
      </div>
    </div>
  );
};

export default StudentInterface;
