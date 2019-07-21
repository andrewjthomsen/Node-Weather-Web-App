const request = require('request')

const url = 'https://api.darksky.net/forecast/33e35c6c697abb35e82b242fae88e2f8/37.8267,-122.4233'

// HTTP REQUEST
// Two arguments passed into request. 
// Options object (url) and a function to run once we have the weather data or when we don't bring back the data
// Func has two arguments: error if no data returns, and response.
// Added third argument to customize request. 
// json can be set to true to have request module automatically parse JSON objects

request({ url: url, json: true }, (error, response) => {
    const data = JSON.parse(response.body)
    // data.currently property returns current forecast info
    console.log(data.currently)
})