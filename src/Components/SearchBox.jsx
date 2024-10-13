import React, { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SaveRoute from "../Institute/SaveRoute"; // Ensure this path is correct
// import { Link } from "react-router-dom";
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox(props) {
  const { setRoutePoints } = props;
  const [searchText, setSearchText] = useState(""); 
  const [startingPoint, setStartingPoint] = useState(null); 
  const [stops, setStops] = useState([]); 
  const [endPoint, setEndPoint] = useState(null); 
  const [searchResults, setSearchResults] = useState([]); 
  const [activeField, setActiveField] = useState(""); 
  const [inputValues, setInputValues] = useState({ start: "", stops: [], end: "" }); 

  // Function to search locations
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const params = {
      q: query,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    fetch(`${NOMINATIM_BASE_URL}${queryString}`)
      .then((response) => response.json())
      .then((result) => {
         console.log("Search results:", result); 
        setSearchResults(result);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleAddStop = () => {
    setStops([...stops, null]);
    setInputValues({ ...inputValues, stops: [...inputValues.stops, ""] });
  };

  const handleSelectLocation = (place) => {
    const location = {
      lat: place.lat,
      lon: place.lon,
      display_name: place.display_name,
    };
    
    if (activeField === "start") {
      setStartingPoint(location);
      setInputValues({ ...inputValues, start: place.display_name });
    } else if (activeField.includes("stop")) {
      const stopIndex = parseInt(activeField.split("-")[1], 10);
      const updatedStops = [...stops];
      updatedStops[stopIndex] = location; 
      setStops(updatedStops);

      const updatedInputStops = [...inputValues.stops];
      updatedInputStops[stopIndex] = place.display_name;
      setInputValues({ ...inputValues, stops: updatedInputStops });
    } else if (activeField === "end") {
      setEndPoint(location);
      setInputValues({ ...inputValues, end: place.display_name });
    }

    setSearchResults([]);
  };

  const handleRouteSubmit = () => {
    const routePoints = [startingPoint, ...stops, endPoint].filter(Boolean);
    console.log("Route points:", routePoints); 
    setRoutePoints(routePoints); 
  };

  const handleInputChange = (field, value) => {
    setSearchText(value);
    handleSearch(value);

    if (field === "start") {
      setInputValues({ ...inputValues, start: value });
      setActiveField("start");
    } else if (field.includes("stop")) {
      const stopIndex = parseInt(field.split("-")[1], 10);
      const updatedInputStops = [...inputValues.stops];
      updatedInputStops[stopIndex] = value;
      setInputValues({ ...inputValues, stops: updatedInputStops });
      setActiveField(field);
    } else if (field === "end") {
      setInputValues({ ...inputValues, end: value });
      setActiveField("end");
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: '70vh' }}>
        {/* Starting Point */}
        <div>
          <h3>Starting Point</h3>
          <OutlinedInput
            style={{ width: "100%" }}
            value={inputValues.start}
            placeholder="Search starting point"
            onChange={(e) => handleInputChange("start", e.target.value)}
          />
          {activeField === "start" && searchResults.length > 0 && (
            <List component="nav">
              {searchResults.map((item) => (
                <ListItem
                  key={item.place_id}
                  button
                  onClick={() => handleSelectLocation(item)}
                >
                  <ListItemText primary={item.display_name} />
                </ListItem>
              ))}
            </List>
          )}
        </div>

        {/* Stops */}
        <div>
          <h3>Stops</h3>
          {stops.map((stop, index) => (
            <div key={index}>
              <OutlinedInput
                style={{ width: "100%" }}
                value={inputValues.stops[index] || ""}
                placeholder={`Stop ${index + 1}`}
                onChange={(e) => handleInputChange(`stop-${index}`, e.target.value)}
              />
              {activeField === `stop-${index}` && searchResults.length > 0 && (
                <List component="nav">
                  {searchResults.map((item) => (
                    <ListItem
                      key={item.place_id}
                      button
                      onClick={() => handleSelectLocation(item)}
                    >
                      <ListItemText primary={item.display_name} />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ))}
          <Button variant="outlined" onClick={handleAddStop}>
            + Add Stop
          </Button>
        </div>

        {/* End Point */}
        <div>
          <h3>End Point</h3>
          <OutlinedInput
            style={{ width: "100%" }}
            value={inputValues.end}
            placeholder="Search end point"
            onChange={(e) => handleInputChange("end", e.target.value)}
          />
          {activeField === "end" && searchResults.length > 0 && (
            <List component="nav">
              {searchResults.map((item) => (
                <ListItem
                  key={item.place_id}
                  button
                  onClick={() => handleSelectLocation(item)}
                >
                  <ListItemText primary={item.display_name} />
                </ListItem>
              ))}
            </List>
          )}
        </div>

        <Button variant="contained" style={{ marginTop: '30px' }} onClick={handleRouteSubmit}>
          Plot Route
        </Button>

        <div className="submit-btn-container" style={{position:'absolute',right:'10px',marginTop:'630px'}}>
        <SaveRoute routePoints={[startingPoint, ...stops, endPoint]} /> {/* Pass route points here */}
      </div>
      </div>

      

      
    </>
  );
}