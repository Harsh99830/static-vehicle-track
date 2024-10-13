import React, { useState }  from 'react';
// import { Link } from 'react-router-dom';
import SearchBox from "../Components/SearchBox";
import Maps from "../Components/Maps";

const AddVehicleInfo = () => {

    const [routePoints, setRoutePoints] = useState([]);

    return (
        <>
        <div className="add-vehicle-body">
            <div className="add-vehicle-container">
                <h1 className="add-vehicle-title">Add Vehicle Information</h1>
                <form encType="multipart/form-data" action="#" method="post"  className="add-vehicle-form">
                    {/* Left Section */}
                    <div className="add-vehicle-section">
                        <div className="add-vehicle-group">
                            <label htmlFor="vehicleName" className="add-vehicle-label">Vehicle Name or Number</label>
                            <input type="text" id="vehicleName" name="vehicleName" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="vehicleType" className="add-vehicle-label">Vehicle Type</label>
                            <select id="vehicleType" name="vehicleType" className="add-vehicle-input" required>
                                <option value="Bus">Bus</option>
                                <option value="Van">Van</option>
                                <option value="Auto">Auto</option>
                            </select>
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="vehicleNumberPlate" className="add-vehicle-label">Vehicle Number Plate No.</label>
                            <input type="text" id="vehicleNumberPlate" name="vehicleNumberPlate" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="vehiclePhoto" className="add-vehicle-label">Upload Vehicle Photo</label>
                            <input type="file" id="vehiclePhoto" name="vehiclePhoto" accept="image/*" className="add-vehicle-file-input" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="add-vehicle-section">
                        <div className="add-vehicle-group">
                            <label htmlFor="driverName" className="add-vehicle-label">Driver Name</label>
                            <input type="text" id="driverName" name="driverName" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="emailAddress" className="add-vehicle-label">Email Address</label>
                            <input type="email" id="emailAddress" name="emailAddress" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="password" className="add-vehicle-label">Enter Password</label>
                            <input type="password" id="password" name="password" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="confirmPassword" className="add-vehicle-label">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="driverContact" className="add-vehicle-label">Driver Contact No.</label>
                            <input type="tel" id="driverContact" name="driverContact" className="add-vehicle-input" required />
                        </div>
                        <div className="add-vehicle-group">
                            <label htmlFor="driverPhoto" className="add-vehicle-label">Upload Driver Photo</label>
                            <input type="file" id="driverPhoto" name="driverPhoto" accept="image/*" className="add-vehicle-file-input" />
                        </div>
                    </div>
                </form>

                {/* Submit Button */}
                {/* <Link to='institution/Addroute'>
                <div className="add-vehicle-submit-btn-container">
                        <input type="submit" value="Next" className="add-vehicle-submit-btn" />
                </div>
                </Link> */}
            </div>
           

        </div>
        
        <div style={{}}>Vehicle Route</div>

        <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "100vh", marginTop:'70px' }}>
      
  
  <div style={{display:'flex', flexDirection:'column',marginLeft:'70px', alignItems:'center', width: "40vw",height:'590px',boxShadow: '0 1px 6px grey'}}>
        <SearchBox setRoutePoints={setRoutePoints} />
      </div>
      <div style={{ width: "50vw", height: "100%" }}>
        <Maps routePoints={routePoints} />
      </div>
    </div>



        </>
    );
};

export default AddVehicleInfo;
