import { countdownTimer } from './countdown'
import { showModal } from './showModal'

/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const baseUrlWeather = "http://api.weatherbit.io/v2.0/forecast/daily?";
const baseUrlImage = "https://pixabay.com/api/?";
const baseUrlRestCountries = "https://restcountries.eu/rest/v2/name/";
const USERNAME = "hugonin_"; // Geonames
const API_KEY_1 = "7ef1e110e00c49abb914bc08eddf17c6"; // WeatherBit 
const API_KEY_2 = "5463371-fdf4fcef6ada1fce8e8a016d5" // Pixabay 

const booktripsContainer = document.getElementById('booktrips-container');

let urls = [];

async function performAction(event) {
    event.preventDefault()

    let cityName = document.getElementById("city-name").value;
    let date = document.getElementById("date-picker").value;
   

    const dLocation = await getCityInfo(baseUrl, cityName, USERNAME)
    const cityUrl = await postData('/add', { cityLat: dLocation.geonames[0].lat, cityLong: dLocation.geonames[0].lng, city: cityName, country: dLocation.geonames[0].countryName, date: date })
    const dWeather = await getWeather(baseUrlWeather, dLocation.geonames[0].lat, dLocation.geonames[0].lng, API_KEY_1)
    const weatherUrl = await postData('/add', { temp: dWeather.data[0].temp, description: dWeather.data[0].weather.description, icon: dWeather.data[0].weather.icon, maxTemp: dWeather.data[0].max_temp, minTemp: dWeather.data[0].min_temp})
    const dRestCountries = await getRestCountries(baseUrlRestCountries, dLocation.geonames[0].countryName)
    const restCountriesUrl = await postData('/add', { currency: dRestCountries[0].currencies[0].name, language: dRestCountries[0].languages[0].nativeName, population: dRestCountries[0].population })
    const dImage = await getImage(baseUrlImage, cityName, API_KEY_2)
    const imageUrl = await postData('/add', { image: dImage.hits[0].webformatURL })
  
    

    urls.push(cityUrl, weatherUrl,imageUrl, restCountriesUrl)

    async function logInOrder(urls) {
        const dataPromises = urls.map(async url => {
            const response = await fetch(url);
            console.log(response)
            return response.data();
        });

        for (const dataPromise of dataPromises) {
            console.log( await dataPromise)
        }
    }
    updateUI()
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
};

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
};


// asynchronous function to fetch the data from the pixabay app endpoint  
const getImage = async (url, city, key) => {

    const res = await fetch(url + `&key=${key}&q=${city}&image_type=all,photo`)
    try {
        const imageData = await res.json();
        console.log(imageData)
        return imageData;
    } catch(error) {
        console.log("error", error)
    }
};

// asynchronous function to fetch data from REST countries API
const getRestCountries = async (url, country) => {

    const res = await fetch(url + `${country}`)
    try {
        const restData = await res.json();
        console.log(restData)
        return restData;
    }catch(error) {
        console.log("error", error)
    }
}


// Post Route
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });
    
    try {
        const newData = await response;
        console.log('Data received:', newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
};



//Update the UI

const updateUI = async () => {

    const request = await fetch('/all');
    try{
        const allData = await request.json();
        booktripsContainer.classList.add('item');
        document.getElementById('country').innerHTML = `<h2 class="info-title-country">My trip to: ${allData.city}, ${allData.country}</h2>`;
        document.getElementById('date').innerHTML = ` <h3 class="info-title-date">Departing: ${allData.date}</h3> `;
        document.getElementById('btn-container').innerHTML = 
            `<div class="btn-container">
                <a href="#" class="cta">Save</a>
                <a href="#" class="cta outline">Remove</a>
            </div>`
        document.getElementById('info-countdown').innerHTML = `${allData.city}, ${allData.country} is in: </p> `;
        document.getElementById('temp').innerHTML = `<p class="info-temp">Typical weather for then is: ${allData.temp}°C, Max: ${allData.maxTemp}°C, Min: ${allData.minTemp}°C</p>`;
        document.getElementById('description').innerHTML = `<p class="info-description-fineprint">${allData.description}<img height="50" width="50" alt="Weather API Icon" src="https://www.weatherbit.io/static/img/icons/${allData.icon}.png"></p>`;
        document.getElementById('placeimage').innerHTML = `<img class="main-image" src="${allData.image}" alt="image-of-the-city">`;
        document.getElementById('rest').innerHTML = 
        `<div class="rest-container">
            <p>Currency: ${allData.currency}</p>
            <p>Language: ${allData.language}</p>
            <p>Population: ${allData.population}</p>
        </div>
       `;

    }catch(error){
      console.log("error", error);
    }
};


  export { 
      performAction,
      countdownTimer,
      showModal,
      updateUI
     }  

