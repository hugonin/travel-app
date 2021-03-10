const booktripForm = document.getElementById('booktrip-form');
const cityInput = document.getElementById('city-name');
const dateInput = document.getElementById('date-picker');
const tripContainer = document.getElementById('booktrips-container');

let booktrips = []




// Build booktrips

function buildBooktrips() {
	// Remove all booktrip elements
	tripContainer.textContent = '';
	// Build items
	booktrips.forEach((booktrip) => {
	  const { city, date } = booktrip;
	  // Item
	  const item = document.createElement('div');
	  item.classList.add('item');
	  tripContainer.appendChild(item).innerHTML = `
	  <i class="fas fa-times close-icon" title= "Delete Bookmark" onclick="deleteBookmark('${date}')"></i>
	  <img class="main-image" src="" alt="image-of-the-city">
	  <h2 class="info-title-country">My trip to: ${city}</h2>
	  <h3 class="info-title-date">Departing: ${date}</h3>
	  <p class="info-countdown">${city} is </p>
	  <p class="info-temp">Typical weather for then is: °C, Max: °C, Min: °C</p>
	  <p class="info-description-fineprint"></p>
	  `;
	});
  }
  


// Fetch booktrips

function fetchBooktrips() {
	// Get booktrips from localStorage if available
	if (localStorage.getItem('booktrips')) {
		booktrips = JSON.parse(localStorage.getItem('booktrips'));
	  } else {
		// Create booktrips array in localStorage
		booktrips = [
			{
				city: '',
				date: '',
			}
		];
		localStorage.setItem('booktrips', JSON.stringify(booktrips));
	  }
	  buildBooktrips();
  }  
  


  // Delete Booktrip
function deleteBooktrip(date) {
	// Loop through the booktrips array
	booktrips.forEach((booktrip, i) => {
	  if (booktrip.date === date) {
		booktrips.splice(i, 1);
	  }
	});
	// Update booktrips array in localStorage, re-populate DOM
	localStorage.setItem('booktrips', JSON.stringify(booktrips));
	//fetchBooktrips();
  }
  

function storeBooktrip(e) {
	e.preventDefault();
	
	let cityValue = cityInput.value;
	let dateValue = dateInput.value;

	console.log(cityValue, dateValue);

	// Set booktrip object, add to array
	const booktrip = {
		city: cityValue,
		date: dateValue,
	};
	booktrips.push(booktrip);
	// Set booktrips in localStorage, fetch, reset input fields
	localStorage.setItem('booktrips', JSON.stringify(booktrips));
	//fetchBooktrips();
	booktripForm.reset();
	cityInput.focus();
}

// Event Listener
booktripForm.addEventListener('submit', storeBooktrip);

// On Load, Fetch Booktrips
//fetchBooktrips();


export { 
    buildBooktrips,
	fetchBooktrips,
	deleteBooktrip,
	storeBooktrip 
}


