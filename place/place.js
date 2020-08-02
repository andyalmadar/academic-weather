const axios = require('axios');

const getPlaceLatLng = async(addressArg) => {
    const encodedAddress = encodeURI(addressArg);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedAddress}?json=1`,
        headers: {}
    });

    const placeData = await instance.get();

    if (placeData.error) {
        throw new Error(`ERROR: ${placeData.error.description}`)
    }

    const { latt, longt, standard: { city } } = placeData.data;

    return {
        address: city,
        lat: latt,
        lng: longt
    }
};

module.exports = {
    getPlaceLatLng
};