const { getPlaceLatLng } = require('./place/place');
const { getWeather } = require('./weather/weather');

const argv =
    require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of the place the user wants to know the weather of',
            demand: true
        }
    })
    .argv;

const getWeatherForecast = async(address) => {
    try {
        const placeLatLng = await getPlaceLatLng(address);
        const weather = await getWeather(placeLatLng.lat, placeLatLng.lng);

        return {
            place: placeLatLng.address,
            weather
        }
    } catch (err) {
        throw new Error(err);
    }
};

getWeatherForecast(argv.address)
    .then(res => {
        console.log(`The temperature now in ${res.place} is ${res.weather}ºC`);
    })
    .catch(err => {
        console.log(`The temperature could not be determined. The input was: ${argv.address}. The error is: ${err}`);
    });