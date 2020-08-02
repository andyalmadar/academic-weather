const axios = require('axios');

const getWeather = async(lat, lng) => {
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=827ec6c62fc367ae054e7511952597fa&units=metric`);

        return weatherData.data.main.temp;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    getWeather
};