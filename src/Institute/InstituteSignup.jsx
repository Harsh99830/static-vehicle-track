import React from 'react';
import { Link } from 'react-router-dom';


function InstituteSignup() {
  return (
    <div className="institute-info-container">
      <h1>Institute Information</h1>
      <form className="institute-info-form">
        <input type="text" placeholder="Enter your institute name" className="institute-info-input" />

        {/* Dropdown for Institute Type */}
        <select className="institute-info-dropdown">
          <option value="" disabled selected>Select Institute Type</option>
          <option value="college">College</option>
          <option value="school">School</option>
        </select>

        <input type="tel" placeholder="Institute contact number" className="institute-info-input" />
        <input type="email" placeholder="Email Address" className="institute-info-input" />
        <input type="password" placeholder="Enter Password" className="institute-info-input" />
        <input type="password" placeholder="Confirm Password" className="institute-info-input" />

        {/* Map container for displaying location */}
        <div className="institute-info-map-container">
          <h3>Institute Location</h3>
          <div id="map" className="institute-info-map">
            {/* Static content for map placeholder */}
            <p>Map will be displayed here.</p>
          </div>
        </div>

        <div className="institute-info-upload-container">
          <button type="button" className="institute-info-upload-btn">Upload Institute logo</button>
        </div>
      </form>
        <Link to='/institute/interface'><button className="institute-info-register-btn">Register</button></Link>
    </div>
  );
}

export default InstituteSignup;
