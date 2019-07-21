const request = require("request");

const url =
  "https://api.darksky.net/forecast/33e35c6c697abb35e82b242fae88e2f8/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!!!");
  } else if (response.body.error) {
    console.log("Unable to find location.");
  } else {
    console.log(
      response.body.daily.data[0].summary +
        " It is currently " +
        response.body.currently.temperature +
        " degrees out. There is a " +
        response.body.currently.precipProbability +
        "% chance of rain."
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather
const geoCodingUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3anRob21zZW4iLCJhIjoiY2pyNXFjam03MjlnNzQ0c2VzNjIzcWdhdyJ9.OgdsY8LjrFyxmcmOYXuAoA";

request({ url: geoCodingUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try searching again.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    // Prints latitude and longitude
    console.log(latitude, longitude);
  }
});
