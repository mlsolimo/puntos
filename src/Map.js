import React, { useState } from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from '@react-google-maps/api';


const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const libraries = ["places"];

const center = {
        lat: -34.603683,
        lng: -58.381557,
    };

const Map = (coordinates) => {
    /*Carga el mapa desde React
    --------------------------------------------------------------------
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBrSfk-SOGesdx_D7enDrg_YZ0YsCkaTOQ',
        libraries,
    });

    

    if (loadError)
        return "Error loading the map";

    if (!isLoaded)
        return "Loading map";
    */
    
    console.log("Desde Map");
    console.log(coordinates.coodinates);
    return (
        <div>
        {coordinates.coodinates.lat === null ? 
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={{lat: -34.6036844, lng: -58.3815591}} /> 
            : 
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={coordinates.coodinates}>
                <Marker position={coordinates.coodinates} />
            </GoogleMap>
        }
        </div>
    );
}

export default Map; 
