import { countdownTimer } from './countdown'

/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const baseUrlWeather = "http://api.weatherbit.io/v2.0/forecast/daily?";
const baseUrlImage = "https://pixabay.com/api/?";
const USERNAME = process.env.USERNAME; // Geonames
const API_KEY_1 = process.env.API_KEY_1; // WeatherBit 
const API_KEY_2 = process.env.API_KEY_2 // Pixabay 


// Event listener to add function to existing HTML DOM element 
//document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(event) {
    event.preventDefault()

    let newCity = document.getElementById("city").value;

 
    if (newCity == "" ) {
        alert("Please provide a city name");
        return false;
      }

        getData(baseUrl, newCity, USERNAME)
            .then(function(data) {
                const lat = data.geonames[0].lat;
                const lng = data.geonames[0].lng;
                const country = data.geonames[0].countryName;
                console.log(data);
                //Add data to POST request
                postData('/add', { lat, lng, country, newCity });
                countdownTimer();
                setInterval(countdownTimer, 1000);
                getWeatherData(baseUrlWeather, lat, lng, API_KEY_1)
                    .then(function(weatherData) {
                    console.log(weatherData);
                    postData('/add', { temp: weatherData.data[0].temp, date: weatherData.data[0].datetime });
                })
                getImage(baseUrlImage, newCity, API_KEY_2)
                    .then(function(imageData) {
                    console.log(imageData);
                    postData('/add', { image: imageData.hits[0].webformatURL });
                })
            }) 
            .then(()=> {
                updateUI();
                })
         
}


// asynchronous function to fetch the data from the geonames app endpoint  
const getData = async (url, city, username) => {

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
const getWeatherData = async (url, lat, lon, key ) => {

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
        document.getElementById('lat').innerHTML = `Latitude: ${allData.lat}`;
        document.getElementById('lng').innerHTML = `Longitude: ${allData.lng} `;
        document.getElementById('country').innerHTML = `Country: ${allData.countryName}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('placeimage').innerHTML = `<img src="${allData.image}" alt="Place image">`;
  
    }catch(error){
      console.log("error", error);
    }
  }


  export { 
      performAction,
      countdownTimer
     }  

