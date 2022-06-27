const URL = 'https://api.openweathermap.org/data/2.5/'
const APP_ID = '&appid=4cbfdedd00ca35ea274b6337d9944772';
const MODE = '&mode=xml';
const TYPE = '&type=like';
const UNITS = '&units=metric';
const COUNT = '&cnt=50';

export const getGeoWeather = async (lat, lon) => {
    const response = await fetch(
        URL + 'weather?' + '&lat=' + lat + '&lon=' + lon + APP_ID + MODE + TYPE + UNITS + COUNT, 
        {
            method: 'GET',
            headers: {
                Accept: 'application/xml'
            },
        }
    );
    return response.text();
}

export const getLocationWeather = async (city) => {
    const response = await fetch(
        URL + 'find?&q=' + city + APP_ID + MODE + TYPE + UNITS + COUNT, 
        {
            method: 'GET',
            headers: {
                Accept: 'application/xml'
            },
        }
    );
    return response.text();
}