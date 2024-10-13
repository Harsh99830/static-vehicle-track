import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Institute Vehicle Tracking System</h1>
      <div className="button-container">
        <Link className="button login-btn" to="/login">Login</Link> {/* Update here */}
        <Link className="button student-btn" to="/register/student">Register as Student</Link>
        <Link className="button institute-btn" to="/register/institute">Register as Institute</Link>
      </div>
    </div>
  );
}

export default Home;
