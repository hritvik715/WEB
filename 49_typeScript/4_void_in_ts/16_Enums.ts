enum WeatherConditions {//imp-> we dont use equal in enum
    sunny,
    cloudy,
    rainy
}

console.log(WeatherConditions.sunny)//imp-> it will give zero kuki zero index hai
console.log(WeatherConditions.rainy)


console.log(`=======================`)







//imp-> we can also assign properties 
enum climateCondition {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy'
}
console.log(climateCondition)
console.log(climateCondition.Sunny)





const currWeather = climateCondition.Snowy;
console.log(`The current weather is ${currWeather}`);