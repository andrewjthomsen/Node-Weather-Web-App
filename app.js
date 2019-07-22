const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Variable to hold onto loaction
const address = process.argv[2];

if (!address) {
  console.log("Please provide an address.");
} else {
  // Callback chaining
  geocode(address, (error, { latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
console.log(process.argv);
