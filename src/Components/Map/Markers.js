import { Marker, Popup } from 'react-leaflet';

const Markers = props => {
    return(
        <Marker 
            key={props.data.key} 
            position={[props.data.lat, props.data.lon]}
            size={10}>

            <Popup>
                <span style={{fontWeight: 'bold'}}>
                    {props.data.cityName}, {props.data.countryCode}
                    <br />
                    {props.data.currentTemp} &#8451;
                </span>
            </Popup>
        </Marker>
    );
}

export default Markers;