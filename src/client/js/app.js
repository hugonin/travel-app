import { countdownTimer } from './countdown'

/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const baseUrlWeather = "http://api.weatherbit.io/v2.0/forecast/daily?";
const baseUrlImage = "https://pixabay.com/api/?";
const USERNAME = "hugonin_"; // Geonames
const API_KEY_1 = "7ef1e110e00c49abb914bc08eddf17c6"; // WeatherBit 
const API_KEY_2 = "5463371-fdf4fcef6ada1fce8e8a016d5" // Pixabay 



// Function called by event listener
function performAction(event) {
    event.preventDefault()

    countdownTimer();
    let cityName = document.getElementById("city").value;

    if (cityName == "" ) {
        alert("Please provide a city name");
        return false;
      }

        getCityInfo(baseUrl, cityName, USERNAME)
            .then(function(data) {
                const cityLat = data.geonames[0].lat;
                const cityLong = data.geonames[0].lng;
                console.log(data);
                 //Add data to POST request
                postData('/add', { cityLat, cityLong, cityName });
                getWeather(baseUrlWeather, cityLat, cityLong, API_KEY_1)
                getImage(baseUrlImage, cityName, API_KEY_2)
            }) 
            .then(function(weatherData) {
                console.log(weatherData);
                postData('/add', { temp: weatherData.data[0].temp, description: weatherData.data[0].weather.description, date: weatherData.data[0].datetime });
                })
            .then(function(imageData) {
                console.log(imageData);
                postData('/add', { image: imageData.hits[0].webformatURL });
                })         
            .then(()=> {
                updateUI();
                })
         
}


// asynchronous function to fetch the data from the geonames app endpoint  
const getCityInfo = async (url, city, username) => {

    const res = await fetch(url + `${city}&maxRows=1&username=${username}`)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error)
    }
}

// asynchronous function to fetch the data from the weatherBit app endpoint  
const getWeather = async (url, lat, lon, key ) => {

    const res = await fetch(url + `&lat=${lat}&lon=${lon}&key=${key}`)
    try {
        const weatherData = await res.json();
        console.log(weatherData)
        return weatherData;
    } catch(error) {
        console.log("error", error)
    }
}


// asynchronous function to fetch the data from the pixabay app endpoint  
const getImage = async (url, city, key) => {

    const res = await fetch(url + `&key=${key}&q=${city}&image_type=photo`)
    try {
        const imageData = await res.json();
        console.log(imageData)
        return imageData;
    } catch(error) {
        console.log("error", error)
    }
}


// Post Route
const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });
    
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
};


// Update UI function
const updateUI = async () => {
  
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('city').innerHTML = `City: ${allData.cityName}`;
        document.getElementById('country').innerHTML = `Country: ${allData.country}`;
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
        document.getElementById('description').innerHTML = `Description: ${allData.description}`;
        document.getElementById('placeimage').innerHTML = `<img src="${allData.image}" alt="Place image">`;
    }catch(error){
      console.log("error", error);
    }
  }


  export { 
      performAction,
      countdownTimer
     }  

