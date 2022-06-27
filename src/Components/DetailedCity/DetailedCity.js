import { useLocation } from 'react-router-dom';
import DetailedCityStyle from './DetailedCityStyle';
import Map from '../Map/Map'

const DetailedCity = () => {

    const city = useLocation().state.city;
    const imgLink = "https://openweathermap.org/img/wn/" + city.weatherIcon + "@2x.png";
    return(
        <div>
            <Map data={[city]} zoom={9} />
            <DetailedCityStyle city={city} imgLink={imgLink} />
        </div>
    ) 

}

export default DetailedCity;