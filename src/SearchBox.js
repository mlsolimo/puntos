import { useState } from 'react';
import PlacesAutomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

const SearchBox = ({coordinates, setCoordinates}) => {

    const [address, setAddress] = useState("");
    
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        //console.log(results);
        //console.log(latLng);
        setAddress(value);
        setCoordinates(latLng);
    };

    return (
        <PlacesAutomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
                <input {...getInputProps({ placeholder: "Type address" })} />
                <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map(suggestions => {
                        const style = {
                            backgroundColor: suggestions.active ? '#fae3d9' : '#fff',
                        }
                        return (
                           <div key={suggestions.id} {...getSuggestionItemProps(suggestions, {style})} > 
                            <span>{suggestions.description}</span>
                           </div>  
                        );
                    })}
                </div>
            </div>
        )}
        </PlacesAutomplete>
    );
}

export default SearchBox;