import React, {useState} from "react";
import './App.css';

//Components
import Map from './Map';
import SearchBox from './SearchBox';

function App() {

  const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
    });

    const handleCoordinates = (value) => {
      setCoordinates(value);
    };
    

  return (
    <div className="App">
      <div className="search">
      <SearchBox coordinates={coordinates} setCoordinates={handleCoordinates}/>
      </div>
      <div className="map">
        <Map coodinates={coordinates} />
      </div>
      
    </div>
  );

}

export default App;
