const request = require('request')

const url = 'https://api.darksky.net/forecast/33e35c6c697abb35e82b242fae88e2f8/37.8267,-122.4233'

// HTTP REQUEST
// Two arguments passed into request. 
// Options object (url) and a function to run once we have the weather data or when we don't bring back the data
// Func has two arguments: error if no data returns, and response.
// Added third argument to customize request. 
// json can be set to true to have request module automatically parse JSON objects

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    // Challenge- print a small forecast to the user
// 1. print "it is currently 58.55 degrees out.
// There is a 0% chance of rain."
// Test work!
    console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})


