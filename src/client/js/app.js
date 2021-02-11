
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const USERNAME = USERNAME;


// Event listener to add function to existing HTML DOM element 
//document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(event) {
    event.preventDefault()

    let newCity = document.getElementById("city").value;
    let newContent = document.getElementById("departure").value;

    if (newCity == "" ) {
        alert("Please provide a city name");
        return false;
      }
    
    
    getData(baseUrl, newCity, USERNAME)
        .then(function(data) {
            console.log(data);
            //Add data to POST request
            postData('/add', { lat: data.geonames.lat, lng: data.geonames.lng, country: data.geonames.countryName });
        }) 
        .then(()=> {
            updateUI();
        })
}


// asynchronous function to fetch the data from the app endpoint  
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
  
    }catch(error){
      console.log("error", error);
    }
  }


  export { performAction }  

