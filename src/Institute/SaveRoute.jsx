import React from 'react';
import { Link } from 'react-router-dom';


const SaveRoute = ({ routePoints }) => {
  // Check if route points are available
  if (!routePoints || routePoints.length === 0) {
    return <div>No route points available to save.</div>; // Display this message if no points are available
  }

  const handleSave = () => {
    // Convert route points to JSON
    const routeData = JSON.stringify(routePoints, null, 2); // Pretty print with indentation
    const blob = new Blob([routeData], { type: 'application/json' }); // Create a blob of the JSON data
    const url = URL.createObjectURL(blob); // Create a URL for the blob

    // Create a link to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'route.json'; // Specify the name of the file to be downloaded
    document.body.appendChild(a); // Append the link to the document
    a.click(); // Simulate a click to trigger the download
    document.body.removeChild(a); // Remove the link after triggering download
    URL.revokeObjectURL(url); // Release the blob URL

    // Store route data in local storage
    localStorage.setItem('savedRoute', routeData);
    // console.log(routeData) // Save the route points to local storage
  };

  return (
    <>
    
    <Link to='/institute/interface'>
                <div className="add-vehicle-submit-btn-container" onClick={handleSave} style={{display:'flex',justifyContent:'right', marginRight:'30px'}}>
                        <input type="submit" value="Save Route" className="add-vehicle-submit-btn" />
                </div>
                </Link>
    <div>

    </div>
    </>
    
  );
};

export default SaveRoute;
