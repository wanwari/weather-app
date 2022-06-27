import Card from 'react-bootstrap/Card';
import Flag from 'react-world-flags';

const CardStyle = props => {
    const imgLink = "https://openweathermap.org/img/wn/" + props.city.weatherIcon + "@2x.png";
    return(
        <Card style={{cursor: 'pointer', marginTop: '25px'}}>
            <Card.Body>
               <div>
                   <h4><Flag code={props.city.countryCode} height='20' /> {props.city.cityName}, {props.city.countryCode}</h4>
                </div>
               <div>
                   Feels like {props.city.feelsLike}&#8451;, {props.city.weatherValue}. {props.city.windSpeedName}
               </div>
               <div>
                    <img src={imgLink} /> <span style={{fontSize: '2em', color: 'lightcoral'}}>{props.city.currentTemp}&#8451;</span>
               </div>
            </Card.Body>
        </Card>
    );
}

export default CardStyle;