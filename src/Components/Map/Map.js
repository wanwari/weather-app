import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from './Markers';

const Map = props => {

    const zoom = props.zoom ? props.zoom : 9;
    const center = calculateMapCenter(props.data);
    const [currentMap, setCurrentMap] = useState(null);

    useEffect(() => {
        if (currentMap !== null) {
            currentMap.flyTo([center.lat, center.lon], zoom);
        }
    }, [center.lat, center.lon]);

    return(
        <MapContainer 
            center={[center.lat, center.lon]}
            zoom={zoom}
            scrollWheelZoom={true}
            whenCreated={(currentMap) => {setCurrentMap(currentMap)}}>

           <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />   

           {props.data.map((mark) => <Markers data={mark} />)}
        </MapContainer>
    );
}

const calculateMapCenter = (cities) => {
    let lat = 0;
    let lon = 0;
    cities.map((city) => {
        lat += Number(city.lat);
        lon += Number(city.lon);
    });
    lat = lat/cities.length;
    lon = lon/cities.length;
    return {lat: lat, lon: lon};
}

export default Map;