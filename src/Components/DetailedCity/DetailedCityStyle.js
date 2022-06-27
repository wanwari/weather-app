import Card from 'react-bootstrap/Card';
import Flag from 'react-world-flags';
import { Col, Row, Table } from 'react-bootstrap';

const DetailedCityStyle = props => {

    const bold = {fontWeight: 'bold'};
console.log(props.city)
    return(
        <Row>
            <Col sm={{span: 10, offset: 1}} xl={{span: 6, offset: 3}}>
                <Card style={{marginTop: '25px'}}>
                    <Card.Header>
                    <div>
                        <h4><Flag code={props.city.countryCode} height='20' /> {props.city.cityName}, {props.city.countryCode}</h4>
                        </div>
                    <div>
                        Feels like {props.city.feelsLike}&#8451;, {props.city.weatherValue}. {props.city.windSpeedName}
                    </div>
                    <div>
                            <img src={props.imgLink} /> {props.city.currentTemp}&#8451;
                        
                    </div>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>
                                        <span style={bold}>Expect weather from</span> {props.city.minTemp}&#8451; <span style={bold}>to</span> {props.city.maxTemp}&#8451;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={bold}>Sunrise:</span> {props.city.sunRise} <span style={bold}>Sunset:</span> {props.city.sunSet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={bold}>Clouds:</span> {props.city.clouds} <span style={bold}>Humidity:</span> {props.city.humidity} <span style={bold}>Pressure:</span> {props.city.pressure}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={bold}>Wind:</span> {props.city.windSpeed}  {props.city.windSpeedUnit} {props.city.windDirectionName} ({props.city.windDirectionValue} {props.city.windDirectionCode})
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={bold}>Geo Location:</span> [{props.city.lat}, {props.city.lon}]
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={bold}>Last Updated:</span> {props.city.lastUpdated}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default DetailedCityStyle;