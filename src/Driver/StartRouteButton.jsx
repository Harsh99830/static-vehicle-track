import React from 'react';
import { Link } from 'react-router-dom';

const StartRouteButton = () => {
  return (
    <Link to='/driver/interface'>
    <button className="start-route-button">
      Start Route
    </button>
    </Link>
  );
};

export default StartRouteButton;
