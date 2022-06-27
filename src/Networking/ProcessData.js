const extractData = (data, mode) => {
    let citiesResults = [];
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(data, 'text/xml');
    const cities = Array.from(doc.getElementsByTagName(mode));
    cities.forEach((city) => {
        citiesResults.push(extractCityData(city));
    });
    return citiesResults;
}

const convertUTCtoEST = utcTime => {
    const correctedUTC = utcTime + 'Z';
    const estTime = new Date(correctedUTC);
    return estTime.toLocaleTimeString('en-CA', {hour: '2-digit', minute: '2-digit'});
}

const extractCityData = data => {

    const cityInfo = {
        id: data.getElementsByTagName("city")[0].attributes.id.value,
        cityName: data.getElementsByTagName("city")[0].attributes.name.value,
        lat: data.getElementsByTagName("coord")[0].attributes.lat.value,
        lon: data.getElementsByTagName("coord")[0].attributes.lon.value,
        countryCode: data.getElementsByTagName("country")[0].innerHTML,
        sunRise: convertUTCtoEST(data.getElementsByTagName("sun")[0].attributes.rise.value),
        sunSet: convertUTCtoEST(data.getElementsByTagName("sun")[0].attributes.set.value),
        currentTemp: data.getElementsByTagName("temperature")[0].attributes.value.value,
        minTemp: data.getElementsByTagName("temperature")[0].attributes.min.value,
        maxTemp: data.getElementsByTagName("temperature")[0].attributes.max.value,
        tempUnit: data.getElementsByTagName("temperature")[0].attributes.unit.value,
        feelsLike: data.getElementsByTagName("feels_like")[0].attributes.value.value,
        feelsLikeUnit: data.getElementsByTagName("feels_like")[0].attributes.unit.value,
        humidity: data.getElementsByTagName("humidity")[0].attributes.value.value + " " + data.getElementsByTagName("humidity")[0].attributes.unit.value,
        pressure: data.getElementsByTagName("pressure")[0].attributes.value.value + " " + data.getElementsByTagName("pressure")[0].attributes.unit.value,
        windSpeed: data.getElementsByTagName("speed")[0].attributes.value.value,
        windSpeedUnit: data.getElementsByTagName("speed")[0].attributes.unit.value,
        windSpeedName: data.getElementsByTagName("speed")[0].attributes.name.value,
        windDirectionValue: data.getElementsByTagName("direction")[0].attributes.value.value,
        windDirectionCode: data.getElementsByTagName("direction")[0].attributes.code.value,
        windDirectionName: data.getElementsByTagName("direction")[0].attributes.name.value,
        clouds: data.getElementsByTagName("clouds")[0].attributes.name.value,
        weatherNumber: data.getElementsByTagName("weather")[0].attributes.number.value,
        weatherValue: data.getElementsByTagName("weather")[0].attributes.value.value,
        weatherIcon: data.getElementsByTagName("weather")[0].attributes.icon.value,
        lastUpdated: (data.getElementsByTagName("lastupdate")[0].attributes.value.value)
    };
    return cityInfo;
}

export default extractData;